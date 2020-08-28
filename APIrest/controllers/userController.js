const User = require('../models/user');
const bcrypt = require('bcrypt');
const sanitaze = require('../sanitaze/sanitazer');
const jwtUtils = require('../utils/jwt.utils');
const { mailOptions } = require('../utils/nodemailer.utils');
const nodemailer = require("nodemailer");
//const authHeader = require('../middleware/authMiddleware');

module.exports = {

    /**
     * middleware express pour récupere les user ayant le plus d'évenement
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} 10 users ayant le plus d'event
     */
    getTopUsers: async (request, response, next) => {
        try {
            const result = await User.findTopPlayer();

            if (!result) {
                response.status('404').json({error:'user not found'})
                //next()
            }

            response.status('200').json({data: result});

        } catch (error) {
            console.log('error:', error);
            next(error);
        }
    },

    /**
     * middleware express pour acceder au information de l'user par identifiant
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'user
     */
    getUserProfile: async (request, response, next) => {
      try {

        const user = await User.findProfileById(request.params.id);
        if (!user) {
            response.status('404').json({ error : 'user not found'});
        }

        delete user._password;
        
        response.status('200').json({data : user});

      } catch (error) {
          console.log('error:', error);
          next(error);
          
      }  
    },
    /**
     * middleware express pour rechercher un user par l'id
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'user
     */
    getUserById: async (request, response, next) => {
        try {
            const result = await User.findById(request.params.id);

            if (!result) {
                response.status('404').json({error:'user not found'})
                //next()
            }
            delete result._password;
            delete result._DOB;

            response.status('200').json({data: result});

        } catch (error) {
            console.log(error);
            next(error);
        }

    },

    /**
     * middleware express pour rechercher un user par l'id
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'user
     */
    findProfilByPk: async (request, response, next) => {
        try {
            const result = await User.findProfileById(request.params.id);

            if (!result) {
                response.status('404').json({error:'user not found'})
                //next()
            }

            response.status('200').json({data: result});

        } catch (error) {
            console.log(error);
            next(error)
        }

    },


    /**
     * middleware express pour rechercher un user par n'importe quel parametre en query string
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'user
     */    
    getUserBy: async (request, response, next) => {
        try {
            const result = await User.findBy(request.query);

            if (!result) {
                response.status('404').json({error:'user not found'})
                //next()
            }

            response.status('200').json({data: result});

        } catch (error) {
            console.log('error:', error);  
            next(error);
        }
    },

    /**
     * middleware express pour créer un user route de signin
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'user crée
     */
    registration: async (request, response, next) => {
        try {

            const checkEmail = {email : request.body.email};
            const checkNickname = {nickname : request.body.nickname};
            
            const tryIfUserExist = await User.findBy(checkEmail);
            
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
           
            const user = new User(request.body);
            
            const saltRounds = 10;
            const encryptedPassword = await bcrypt.hash(request.body.password, saltRounds);
            user.password = encryptedPassword;

            /****** send mail at new user *********/  
            transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
                }
            });
            const options = mailOptions(user) ;
            transporter.sendMail(options, (err, _) => {
                if (err) {
                  console.log('error', err)
                }
            });
            /*************************************/

            await user.insert();
            console.log(user)
            response.status('200').json({data:{
                _id : user._id,
                _email : user._email,
                _nickname : user._nickname,
                _dateofbirth : user._dateofbirth
            }});
            
        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    /**
     * middleware express pour loger un user
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'user connecté
     */
    login: async (request, response, next) => {
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
        request.session.user = user;
        delete request.session.user.password;
        delete user._password;
        //response.status('200').json({data: { logged : true, info: request.session.user}});
        // let tokens = {};
        // tokens._access_token = jwtUtils.generateAccessToken(user);
        // tokens._refresh_token = await jwtUtils.generateRefreshToken(user);
        
        response.status('200').json({data :{/* tokens:  tokens  ,*/  logged : true, info: request.session.user}});

      } catch (error) {
          console.log('error:', error)
          next(error);
      }  
    },

    /**
     * middleware express check si il existe un session
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'user connecté
     */
    isLogged: (request, response, next) => {
        try{
            if(request.session.user) {
                response.status('200').json({data : {logged : true, info: request.session.user}});
            } else {
                response.json({logged : false, info: { favourite: []} });
            }

        }catch(error){
            console.log(error)
            next(error);
        }
    },

    /**
     * middleware express pour logout
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     */
    logout: async (request, response, next) => {
        try {
            
            // const refreshToken = request.body.refreshToken;
            // await jwtUtils.deleteRefreshToken(refreshToken);
            request.session.destroy();

            response.status('200').json({logout: 'ok'});

        } catch (error) {
            console.log('error:', error)
            next(error);
        }
    },

    /**
     * middleware express pour update un user par l'id
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'user
     */
    updateAnUser: async (request, response, next) => {
        try {
            const user = await User.findById(request.params.id);

            Object.assign(user, request.body);


            if(request.body.password) {

                const saltRounds = 10;
                const encryptedPassword = await bcrypt.hash(request.body.password, saltRounds);
                user.password = encryptedPassword;
            }

            if(request.body.description) {
                user.description = sanitaze.htmlEntities(user.description);
            }
            if(request.files.avatar) {
         

                if(request.files.avatar.size > 2000000){

                    response.status('413').json({error:'your file is too large'});

                }
                    //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
                    let avatarImg = request.files.avatar;
                    console.log(avatarImg.name)
                    //Use the mv() method to place the file in upload directory (i.e. "uploads")
                    avatarImg.mv('../matehub-app/public/src/assets/uploads/' + avatarImg.name);
                

                user.avatar = sanitaze.htmlEntities(avatarImg.name);
            }
            if(request.files.banner) {
                if(request.files.banner.size > 3000000){

                    response.status('413').json({error:'your file is too large'});

                }
                    //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
                    let bannerImg = request.files.banner;
                    //Use the mv() method to place the file in upload directory (i.e. "uploads")
                    avatarImg.mv('../matehub-app/public/src/assets/uploads/' + bannerImg.name);
    

                user.banner = sanitaze.htmlEntities(bannerImg.name);
            }
    
            const result = await user.update();
            
            response.status('201').json({data: result});
            
        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    /**
     * middleware express pour delete un user par l'id
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {boolean} true si ok
     */
    deleteAnUser: async (request, response, next) => {
        try {
            const user = await User.findById(request.params.id);

            const result = await user.delete();
        
            response.status('200').json({data: result});
                       
        } catch (error) {
            console.log(error)
            next(error);
        }
    }
}           delete user._password;
            response.status('201').json({data: result});
            
        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    /**
     * middleware express pour delete un user par l'id
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {boolean} true si ok
     */
    deleteAnUser: async (request, response, next) => {
        try {
            const user = await User.findById(request.params.id);

            const result = await user.delete();
        
            response.status('200').json({data: result});
                       
        } catch (error) {
            console.log(error)
            next(error);
        }
    }
}