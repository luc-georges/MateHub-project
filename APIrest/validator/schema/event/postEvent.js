const Joi = require('joi');

module.exports = Joi.object({
    user_id: Joi.number().integer().min(1).required(),
    game_id: Joi.number().integer().min(1).required(),
    event_time: Joi.date().required(),
    duration: Joi.string().pattern(/(^\d{2}):(0|3)(0):0{2}$/),
    player_count: Joi.number().integer().min(1).required(),
    description: Joi.string().max(280),
    status: Joi.number().integer().min(0).max(0),
    vocal: Joi.string(),
    player_max: Joi.number().integer().min(1).required(),
    language: Joi.object({
        fr1: Joi.boolean(),
        uk2: Joi.boolean(),
        it3: Joi.boolean(),
        es4: Joi.boolean(),
        ru5: Joi.boolean(),
        de6: Joi.boolean()
    }).required()
});
