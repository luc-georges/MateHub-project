const express = require('express');

const userController = require('../controllers/userController');
const eventController = require('../controllers/eventController');
const gameController = require('../controllers/gameController');

const router = express.Router();

router.post('/user', userController.createAnUser);
router.get('/user/:id', userController.getUserById);
router.get('/find/user', userController.getUserBy);
router.put('/user/:id', userController.updateAnUser);
router.delete('/user/:id', userController.deleteAnUser);

router.get('/events', eventController.getAllEvent);
router.get('/event/:id', eventController.getEventById);
router.get('/find/event', eventController.getEventBy);
router.post('/event', eventController.createAnEvent);
router.put('/event/:id', eventController.updateAnEvent);
router.delete('event/:id', eventController.deleteAnEvent);

router.get('/games', gameController.getAllGame);
router.get('/game/:id', gameController.getGameById);


module.exports = router;

