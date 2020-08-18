const User = require('../models/user');

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