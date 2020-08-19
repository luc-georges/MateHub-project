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
            response.status('404').json({message: `pas de resultat pour la recherche`});    
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
                return response.status('400').json({error:'password must be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number' });
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
          
            response.status('200').json({user:user});
            
        } catch (error) {
            console.log(error);
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
            //localStorage.setItem("errorMessage","password must be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number") ;

            const user = await User.findById(request.params.id);
    
            Object.assign(user, request.body);

            console.log('user',user)

            if(request.body.password) {
                const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
                //console.log(user.password);
                //console.log(user.password.search(regex));
                if (user.password.search(regex) === -1) {
                    return response.status('400').json({error:'password must be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number' });
                    //throw Error('password must be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number');
                };
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
            
            response.status('200').json({data: result});
            
        } catch (error) {
            console.log(error);
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
        }
    }
}