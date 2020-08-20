const Joi = require('joi');

module.exports = Joi.object({
    email: Joi.string().email({minDomainSegments: 2}).required(),
    password: Joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).required(),
    passwordConfirm: Joi.string().required(),
    nickname: Joi.string().alphanum().min(3).max(30).required(),
    DOB: Joi.date().required()
});
