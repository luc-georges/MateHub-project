const User = require('../models/user');
const bcrypt = require('bcrypt');
const sanitaze = require('../sanitaze/sanitazer');
const jwtUtils = require('../utils/jwt.utils');

module.exports = {

    /**
     * middleware express pour récupere les user ayant le plus d'évenement
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} 10 users ayant le plus d'event
     */
    getTopUsers: async (request, response) => {
        try {
            const result = await User.findTopPlayer();

            if (!result) {
                response.status('404').json({error:'user not found'})
                //next()
            }

            response.status('200').json({data: result});

        } catch (error) {
            console.log('error:', error);
            response.status('500').json({error:'Internal Server Error'});
        }
    },

    /**
     * middleware express pour acceder au information de l'user par identifiant
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'user
     */
    getUserProfile: async (request, response) => {
      try {
        
        const user = await User.findById(request.params.id);
        if (!user) {
            response.status('404').json({ error : 'user not found'});
        }

        const headerAuth = request.headers['authorization'];
        const userId = await jwtUtils.getUserId(headerAuth);

        if (userId !== user._id ) {
            return response.status('400').json({error: 'wrong token'});
        }


        delete user._password;
        response.status('200').json({data : user});

      } catch (error) {
          console.log('error:', error);
          response.status('500').json({error:'Internal Server Error'});
          
      }  
    },
    /**
     * middleware express pour rechercher un user par l'id
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'user
     */
    getUserById: async (request, response) => {
        try {
            const result = await User.findById(request.params.id);

            if (!result) {
                response.status('404').json({error:'user not found'})
                //next()
            }

            response.status('200').json({data: result});

        } catch (error) {
            console.log(error);
            response.status('500').json({error:'Internal Server Error'});
        }

    },

    /**
     * middleware express pour rechercher un user par n'importe quel parametre en query string
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'user
     */    
    getUserBy: async (request, response) => {
        try {
            //console.log('laaaaaaaaaaaaaaaaaaaaaaa',request.query);
            const result = await User.findBy(request.query);

            if (!result) {
                response.status('404').json({error:'user not found'})
                //next()
            }

            response.status('200').json({data: result});

        } catch (error) {
            console.log('error:', error);  
            response.status('500').json({error:'Internal Server Error'});
        }
    },

    /**
     * middleware express pour créer un user route de signin
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'user crée
     */
    registration: async (request, response) => {
        try {

            const checkEmail = {email : request.body.email};
            const checkNickname = {nickname : request.body.nickname};
            //console.log(checkEmail);
            
            const tryIfUserExist = await User.findBy(checkEmail);
            //console.log('tryIfUserExist:', tryIfUserExist)
            
            if(tryIfUserExist) {
                return response.status('409').json({error:'User already Exist'});
            }
            
            const tryIfNicknameExist = await User.findBy(checkNickname);
            if(tryIfNicknameExist) {
                return response.status('409').json({error:'Nickname already Exist'});
            }
            
            if(request.body.password !== request.body.passwordConfirm) {
                return response.status('409').json({error:'password and passwordComfirm must be same'});
            }
           
           //console.log('dddjkjdkjkdjdkdjkdjdkjdkj');
            const user = new User(request.body);
            
            const saltRounds = 10;
            const encryptedPassword = await bcrypt.hash(request.body.password, saltRounds);
            user.password = encryptedPassword;
            
            await user.insert();
          
            response.status('200').json({data:{
                _id : user._id,
                _email : user._email,
                _nickname : user._nickname,
                _DOB : user._DOB
            }});
            
        } catch (error) {
            console.log(error);
            response.status('500').json({error:'Internal Server Error'});
        }
    },

    /**
     * middleware express pour loger un user
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'user connecté
     */
    login: async (request, response) => {
      try {
        
        const checkEmail = {email : request.body.email};
        const user = await User.findBy(checkEmail);
        if(!user) {
            return response.status('409').json({error:'user not found'});
        }

        const validPassword = await bcrypt.compare(request.body.password, user.password);
        if(!validPassword) {
            return response.status('409').json({error:'incorect password'});
        }

        delete user._password;
        user._token = jwtUtils.generateTokenForUser(user)
        
        response.status('200').json({data: {
            user
            }
        });

      } catch (error) {
          console.log('error:', error)
          response.status('500').json({error:'Internal Server Error'});
      }  
    },

    /**
     * middleware express check si il existe un session
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'user connecté
     */
    isLogged: (request, response) => {
        
        if(request.session.user) {
            response.status('200').json({data : {logged : true, info: request.session.user}});
        } else {
            response.json({logged : false, info: { favourite: []} });
        }
    },

    /**
     * middleware express pour logout
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     */
    logout: async (request, response) => {
        try {

            response.status('200');

        } catch (error) {
            console.log('error:', error)
            response.status('500').json({error:'Internal Server Error'});
        }
    },

    /**
     * middleware express pour update un user par l'id
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'user
     */
    updateAnUser: async (request, response) => {
        try {
            const user = await User.findById(request.params.id);

            const headerAuth = request.headers['authorization'];
            const userId = jwtUtils.getUserId(headerAuth);
    
            if (userId !== user.id) {
                return response.status('400').json({error: 'wrong token'});
            }

    
            Object.assign(user, request.body);

            console.log('user',user)

            if(request.body.password) {

                const saltRounds = 10;
                const encryptedPassword = await bcrypt.hash(request.body.password, saltRounds);
                user.password = encryptedPassword;
            }

            if(request.body.description) {
                user.description = sanitaze.htmlEntities(user.description);
            }
            if(request.body.avatar) {
                user.avatar = sanitaze.htmlEntities(user.avatar);
            }
            if(request.body.banner) {
                user.banner = sanitaze.htmlEntities(user.banner);
            }
    
            const result = await user.update();
            
            response.status('201').json({data: result});
            
        } catch (error) {
            console.log(error);
            response.status('500').json({error:'Internal Server Error'});
        }
    },

    /**
     * middleware express pour delete un user par l'id
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {boolean} true si ok
     */
    deleteAnUser: async (request, response) => {
        try {
            const user = await User.findById(request.params.id);

            const headerAuth = request.headers['authorization'];
            const userId = jwtUtils.getUserId(headerAuth);
    
            if (userId !== user.id) {
                return response.status('400').json({error: 'wrong token'});
            }

            const result = await user.delete();
        
            response.status('200').json({data: result});
                       
        } catch (error) {
            console.log(error)
            response.status('500').json({error:'Internal Server Error'});    
        }
    }
}