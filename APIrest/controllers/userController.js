const User = require('../models/user');
const bcrypt = require('bcrypt');
const sanitaze = require('../sanitaze/sanitazer');

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

            const tryIfUserExist = await User.findBy(request.body.email);
            if(tryIfUserExist) {
                return response.status('409').json({error:'User already Exist'});
            }

            const tryIfNicknameExist = await User.findBy(request.body.nickname);
            if(tryIfNicknameExist) {
                return response.status('409').json({error:'Nickname already Exist'});
            }

            if(request.body.password !== request.body.passwordConfirm) {
                return response.status('409').json({error:'password and passwordComfirm must be same'});
            }

            const user = new User(request.body);

            const saltRounds = 10;
            const encryptedPassword = await bcrypt.hash(request.body.password, saltRounds);
            user.password = encryptedPassword;
 
            await user.insert();
          
            response.status('200').json({data:user});
            
        } catch (error) {
            console.log(error);
            response.status('500').json({error:'Internal Server Error'});
        }
    },

    login: async (request, response) => {
      try {
        const user = await User.findBy(request.body.email);
        if(!user) {
            return response.status('409').json({error:'user not found'});
        }

        const validPassword = await bcrypt.compare(request.body.password, user.password);
        if(!validPassword) {
            return response.status('409').json({error:'incorect password'});
        }

        request.session.user = user;
        delete request.session.user.password;

        response.status('200').json({data: user});

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
            const result = await user.delete();
        
            response.status('200').json({data: result});
                       
        } catch (error) {
            console.log(error)
            response.status('500').json({error:'Internal Server Error'});    
        }
    }
}