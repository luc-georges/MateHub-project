const Event = require('../models/event');
const Game = require('../models/game');
const sanitaze = require('../sanitaze/sanitazer');

module.exports = {
    
    /**
     * middleware express pour rechercher tout les events
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} tout les events
     */
    getAllEvent: async (request, response) => {
        try {
            const result = await Event.findAllEvent();

            response.status('200').json({data: result});

        } catch (error) {
            console.log('error:', error)
            response.status('500').json({error:'Internal Server Error'});
        }
    },

    /**
     * middleware express pour rechercher un event par l'id
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'event
     */
    getEventById: async (request, response) => {
        try {
            const result = await Event.findEventById(request.params.id);

            if (!result) {
                response.status('404').json({error:'event not found'})
                //next()
            }

            response.status('200').json({data: result})

        } catch (error) {
            console.log('error:', error)
            response.status('500').json({error:'Internal Server Error'});
        }
    },

    /**
     * middleware express pour rechercher un event par n'importe quel parametre en query string
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'event
     */ 
    getEventBy: async (request, response) => {
        try {
           
            const result = await Event.findBy(request.query);

            if (!result) {
                response.status('404').json({error:'event not found'})
                //next()
            }
            response.status('200').json({data: result});

        } catch (error) {
            console.log('error:', error);
            response.status('500').json({error:'Internal Server Error'});
        }
    },

    getAllEventFromUserByNickname: async (request, response) => {
        try {
            
            const result = await Event.getAllEventByNickname(request.params.nickname);
            response.status('200').json({data: result});

        } catch (error) {
            console.log('error:', error);
            response.status('500').json({error:'Internal Server Error'});
        }
    },

    /**
     * middleware express pour créer un event
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'event
     */
    createAnEvent: async (request, response) => {
        try {
            const event = await new Event(request.body);
            console.log('request.body:', request.body)

            if(event.description) {
                event.description = sanitaze.htmlEntities(event.description);
            }
            if(event.status) {
                event.status = sanitaze.htmlEntities(event.status);
            }
            if(event.vocal) {
                event.vocal = sanitaze.htmlEntities(event.vocal);
            }

            await event.insert();
          
            response.status('200').json({data: event});

        } catch (error) {
            console.log('error:', error);
            response.status('500').json({error:'Internal Server Error'});
        }
    },

    /**
     * middleware express pour update un event par l'id
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'event
     */
    updateAnEvent: async (request, response) => {
        try {
            const event = await Event.findById(request.params.id);
    
            Object.assign(event, request.body);

            if(event.description) {
                event.description = sanitaze.htmlEntities(event.description);
            }
            if(event.status) {
                event.status = sanitaze.htmlEntities(event.status);
            }
            if(event.vocal) {
                event.vocal = sanitaze.htmlEntities(event.vocal);
            }
    
            const result = await event.update();
            
            response.status('201').json({data: result});
            
        } catch (error) {
            console.log(error);
            response.status('500').json({error:'Internal Server Error'});
        }
    },

    /**
     * middleware express pour delete un event par l'id
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {boolean} true si ok
     */
    deleteAnEvent: async (request, response) => {
        try {
            const event = await Event.findById(request.params.id);
            const result = await event.delete();
        
            response.status('200').json({data: result});
                       
        } catch (error) {
            console.log(error);
            response.status('500').json({error:'Internal Server Error'});
        }
    }


}