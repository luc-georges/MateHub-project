module.exports = {
    /**
     * Générateur de middleware pour la validation du body
     * @param {Joi.Object} schema - Le schema de validation du module Joi 
     * @returns {Function} - Renvoi un middleware pour express qui valide le corp de la 
     * requête en utilisant le schema passé en paramètre. Renvoi une erreur 400 si la validation échoue.
     */
    validateBody: schema => {
        return (request, response, next) => {
            const { error } = schema.validate(request.body);

            if (error) {
                response.status(400).json(error);
                return;
            }

            next();
        };
    }
};