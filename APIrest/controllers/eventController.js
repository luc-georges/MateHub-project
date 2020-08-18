const Event = require('../models/event');
const sanitaze = require('../sanitaze/sanitazer');

module.exports = {
    
    /**
     * middleware express pour rechercher tout les events
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} tout les events
     */
    getAllEvent: async (request, response, next) => {
        try {
            const result = await Event.getAll();

            response.json(result);

        } catch (error) {
            console.log('error:', error)
            
        }
    },

    /**
     * middleware express pour rechercher un event par l'id
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'event
     */
    getEventById: async (request, response, next) => {
        try {
            const result = await Event.findById(request.params.id);

            response.json(result)

        } catch (error) {
            console.log('error:', error)
            
        }
    },

    /**
     * middleware express pour créer un event
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'event
     */
    createAnEvent: async (request, response, next) => {
        try {
            const event = await new Event(request.body);

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
          
            response.json({event: event});

        } catch (error) {
            console.log('error:', error)
            
        }
    },

    /**
     * middleware express pour update un event par l'id
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'event
     */
    updateAnEvent: async (request, response, next) => {
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
            
            response.json({result});
            
        } catch (error) {
            console.log(error)
        }
    },

    /**
     * middleware express pour delete un event par l'id
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {boolean} true si ok
     */
    deleteAnEvent: async (request, response, next) => {
        try {
            const event = await Event.findById(request.params.id);
            const result = await event.delete();
        
            response.json({result});
                       
        } catch (error) {
            console.log(error)     
        }
    }



}