const express = require('express');
const User = require('../models/user');
const Level = require('../models/level');
const Game = require('../models/game')
const Lang = require('../models/lang')
const Event = require('../models/event');

const router = express.Router();

router.get('/all', async (request, response, next) => {
    const result = await Level.getAll();
    response.json(result) 
});

router.get('/user/:id', async (request, response, next) => {
    const result = await User.findById(request.params.id);
    response.json(result);
})

router.post('/user', async (request, response, next) => {
    try {
        const user = new User(request.body);

        await user.insert();

    
        response.json({user:user});
        
    } catch (error) {
        console.log(error);
    }
})

router.delete('/user/:id', async (request, response, next) => {
    const user = await User.findById(request.params.id);
    const result = await user.delete();

    response.json({result});
    
})

router.put('/user/:id', async (request, response, next) => {
    try {
        const user = await User.findById(request.params.id);

        Object.assign(user, request.body);

        const result = await user.update();
        
        response.json({result});
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;

