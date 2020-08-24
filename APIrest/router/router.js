const express = require('express');
const router = express.Router();

/****** JOI **************/
const { validateBody } = require('../validator/validator');
//user
const postUserSchema = require('../validator/schema/user/postUser');
const updateUserSchema = require('../validator/schema/user/updateUser');
//event
const postEventSchema = require('../validator/schema/event/postEvent');
const updateEventSchema = require('../validator/schema/event/updateEvent');

/******** CONTROLLERS ***********/
//user
const userController = require('../controllers/userController');
//event
const eventController = require('../controllers/eventController');
//game
const gameController = require('../controllers/gameController');


/********* ROUTER USER ***************/
router.get('/user/top', userController.getTopUsers);
router.get('/user/:id/profile/private', userController.getUserProfile);
router.get('/user/:id', userController.getUserById);
//router.get('/find/user', userController.getUserBy);//find/user?nickname=test2login
router.post('/registration', validateBody(postUserSchema), userController.registration);
router.post('/users/login', userController.login);
router.post('/users/islogged', userController.isLogged);
router.get('/users/logout', userController.logout);
router.put('/user/:id/update', validateBody(updateUserSchema), userController.updateAnUser);
router.delete('/user/:id/delete', userController.deleteAnUser);


/***********ROUTER EVENT *********/
router.get('/events', eventController.getAllEvent);
router.get('/event/:id', eventController.getEventById);
router.get('/search/events', eventController.getEventByParams);
router.get('/find/event', eventController.getEventBy);//querystring
router.post('/createEvent/user/:id', validateBody(postEventSchema), eventController.createAnEvent);
router.put('/updateEvent/event/:id/user/:userId', validateBody(updateEventSchema), eventController.updateAnEvent);
router.delete('/deleteEvent/event/:id/user/:userId', eventController.deleteAnEvent);

/********** ROUTER EVENT'S USER *********/
router.get('/user/:nickname/events', eventController.getAllEventFromUserByNickname);

/********** ROUTER GAME ***************/
router.get('/games', gameController.getAllGame);
router.get('/game/:id', gameController.getGameById);


module.exports = router;

