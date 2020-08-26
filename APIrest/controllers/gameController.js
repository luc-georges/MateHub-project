const Game = require('../models/game');

module.exports = {

    /**
     * middleware express pour rechercher tout les jeux
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} tout les jeux
     */
    getAllGame: async (request, response, next) => {
        try {
            const result = await Game.getAll();

            response.json(result);

        } catch (error) {
            console.log('error:', error)
            next(error);
        }
    },

    /**
     * middleware express pour rechercher un jeu par l'id
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} le jeu
     */
    getGameById: async (request, response, next) => {
        try {
            const result = await Game.findById(request.params.id);

            response.json(result)

        } catch (error) {
            console.log('error:', error)
            next(error);
        }
    },

}