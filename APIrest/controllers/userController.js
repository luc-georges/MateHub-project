const User = require('../models/user');

module.exports = {

    getUserById: async (request, response, next) => {
        try {
            const result = await User.findById(request.params.id);
            response.json(result);

        } catch (error) {
            console.log(error);
        }

    },

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