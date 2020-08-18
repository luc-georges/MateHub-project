const express = require('express');

const userController = require('../controllers/userController');
const eventController = require('../controllers/eventController');

const router = express.Router();
/*
router.get('/all', async (request, response, next) => {
    const result = await Level.getAll();
    response.json(result) 
});*/

router.post('/user', userController.createAnUser);
router.get('/user/:id', userController.getUserById);
router.put('/user/:id', userController.updateAnUser);
router.delete('/user/:id', userController.deleteAnUser);


module.exports = router;

