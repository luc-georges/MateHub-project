const Joi = require('joi');

module.exports = Joi.object({
    user_id: Joi.number().integer().min(1),
    game_id: Joi.number().integer().min(1),
    event_time: Joi.date(),
    duration: Joi.string().pattern(/(^\d{2}):(0|3)(0):0{2}$/),
    player_count: Joi.number().integer().min(1),
    description: Joi.string().max(280),
    status: Joi.number().integer().min(0).max(2),
    vocal: Joi.string()
});