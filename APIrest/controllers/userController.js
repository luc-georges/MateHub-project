const User = require('../models/user');
const bcrypt = require('bcrypt');
const sanitaze = require('../sanitaze/sanitazer');

module.exports = {

    /**
     * middleware express pour rechercher un user par l'id
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'user
     */
    getUserById: async (request, response, next) => {
        try {
            const result = await User.findById(request.params.id);
            response.json(result);

        } catch (error) {
            console.log(error);
        }

    },

    /**
     * middleware express pour créer un user
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'user crée
     */
    createAnUser: async (request, response, next) => {
        try {
            const user = new User(request.body);

            const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
            //console.log(user.password);
            //console.log(user.password.search(regex));
            if (user.password.search(regex) === -1) {
                throw Error('password must be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number');
            };
            const saltRounds = 10;
            const encryptedPassword = await bcrypt.hash(request.body.password, saltRounds);
            user.password = encryptedPassword;

            if(user.description) {
                user.description = sanitaze.htmlEntities(user.description);
            }
            if(user.avatar) {
                user.avatar = sanitaze.htmlEntities(user.avatar);
            }
            if(user.banner) {
                user.banner = sanitaze.htmlEntities(user.banner);
            }
                
    
            await user.insert();
          
            response.json({user:user});
            
        } catch (error) {
            console.log(error);
            response.json({message: "an error was caught"});
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

            if(user.password) {
                const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
                //console.log(user.password);
                //console.log(user.password.search(regex));
                if (user.password.search(regex) === -1) {
                    throw Error('password must be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number');
                };
                const saltRounds = 10;
                const encryptedPassword = await bcrypt.hash(request.body.password, saltRounds);
                user.password = encryptedPassword;
            }

            if(user.description) {
                user.description = sanitaze.htmlEntities(user.description);
            }
            if(user.avatar) {
                user.avatar = sanitaze.htmlEntities(user.avatar);
            }
            if(user.banner) {
                user.banner = sanitaze.htmlEntities(user.banner);
            }
    
            const result = await user.update();
            
            response.json({result});
            
        } catch (error) {
            console.log(error)
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
        
            response.json({result});
                       
        } catch (error) {
            console.log(error)     
        }
    }
}