const Event = require('../models/event');
//const Game = require('../models/game');
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
            const result = await Event.findAllEvent();

            response.status('200').json({data: result});

        } catch (error) {
            console.log('error:', error)
            next(error);
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
            const result = await Event.findEventById(request.params.id);

            if (!result) {
                response.status('404').json({error:'event not found'})
                //next()
            }

            response.status('200').json({data: result})

        } catch (error) {
            console.log('error:', error)
            next(error);
        }
    },

    /**
     * middleware express pour rechercher un event par n'importe quel parametre en query string
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'event
     */ 
    getEventBy: async (request, response, next) => {
        try {
           
            const result = await Event.findBy(request.query);

            if (!result) {
                response.status('404').json({error:'event not found'})
                //next()
            }
            response.status('200').json({data: result});

        } catch (error) {
            console.log('error:', error);
            next(error);
        }
    },

    getEventByParams: async (request, response, next) => {
      try {
        
        console.log(request.body);
        const result = await Event.getEventByParams(request.body);

        response.status('200').json({data: result});

      } catch (error) {
          console.log('error:', error)
          next(error);
      }  
    },

    getAllEventFromUserByNickname: async (request, response, next) => {
        try {
            
            const result = await Event.getAllEventByNickname(request.params.nickname);
            response.status('200').json({data: result});

        } catch (error) {
            console.log('error:', error);
            next(error);
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
            next(error);
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

            const event = await Event.findById(request.params.eventId);
    
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
            next(error);
        }
    },

    applyEvent: async (request, response, next) => {
        try {
            
            const checkValues = [request.params.eventId,request.params.id];
            const check = await Event.getUserOnEvent(checkValues);

            if (check) {
                return response.status('400').json({error:'user was already on this event'});
            }

            const values = [request.params.eventId, request.params.id,0,'Hey mate, i would love to participate! Check my profile !'];
            if (request.body.message) {
                values[3] = sanitaze.htmlEntities(request.body.message);
            }

            const result = await Event.addUserOnEvent(values);
            response.status('201').json({data: result});

        } catch (error) {
            console.log('error:', error)
            next(error);
        }
    },

    acceptUserOnEvent: async (request, response, next) => {
     try {
        const values = [1,request.params.eventId,request.params.id];
        const UpUserHasEvent = await Event.updateUserOnEvent(values);

        const event = await Event.findById(request.params.eventId);
        event._player_count += 1;
        const eventResult = await event.update();

        response.status('201').json({data:{UpUserHasEvent,eventResult}});

     } catch (error) {
        console.log('error:', error)
        next(error);
     }   
    },

    kickUserOnEvent: async (request, response, next) => {
      try {
        const values = [request.params.eventId,request.params.id];
        const result = await Event.getUserOnEvent(values);

        const updateValues = [2,request.params.eventId,request.params.id];
        const kickUserHasEvent = await Event.updateUserOnEvent(updateValues);

        const event = await Event.findById(request.params.eventId);

        switch (result.status) {
            case 0:
                break;
            
            case 1:
                event._player_count -= 1;
                break;

            case 2:
                return response.status('400').json({error:'user was already kicked'});
            default:
                return response.status('400').json({error:'status code not accepted'});
        }
        const eventResult = await event.update();

        response.status('201').json({data:{eventResult,kickUserHasEvent}});

      } catch (error) {
          console.log('error:', error)
          next(error);
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
        
            response.status('200').json({data: result});
                       
        } catch (error) {
            console.log(error);
            next(error);
        }
    }


}