const express = require('express');

/****** JOI **************/
const { validateBody } = require('../validator/validator');
//user
const postUserSchema = require('../validator/schema/user/postUser');
const updateUserSchema = require('../validator/schema/user/updateUser');
//event
const postEventSchema = require('../validator/schema/event/postEvent');
const updateEventSchema = require('../validator/schema/event/updateEvent');


const userController = require('../controllers/userController');
const eventController = require('../controllers/eventController');
const gameController = require('../controllers/gameController');

const router = express.Router();

/********* ROUTER USER ***************/
router.get('/user/:id', userController.getUserById);
router.get('/find/user', userController.getUserBy);//find/user?nickname=test2login
router.post('/user', validateBody(postUserSchema), userController.createAnUser);
router.put('/user/:id', validateBody(updateUserSchema), userController.updateAnUser);
router.delete('/user/:id', userController.deleteAnUser);

/***********ROUTER EVENT *********/
router.get('/events', eventController.getAllEvent);
router.get('/event/:id', eventController.getEventById);
router.get('/find/event', eventController.getEventBy);
router.post('/event', validateBody(postEventSchema), eventController.createAnEvent);
router.put('/event/:id', validateBody(updateEventSchema), eventController.updateAnEvent);
router.delete('/event/:id', eventController.deleteAnEvent);

/********** ROUTER EVE?T'S USER *********/
router.get('/user/:nickname/events', eventController.getAllEventFromUserByNickname)

/********** ROUTER GAME ***************/
router.get('/games', gameController.getAllGame);
router.get('/game/:id', gameController.getGameById);


module.exports = router;

