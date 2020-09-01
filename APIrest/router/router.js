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

/*********** 500 ******************/
const serverError = require('../middleware/serverErrorMiddleware');


/********* JWT *******************/
const { authenticateToken } = require('../middleware/authMiddleware');
const { ownerControl } = require('../middleware/ownerControlMiddleware');

/******** CONTROLLERS ***********/
//user
const userController = require('../controllers/userController');
//event
const eventController = require('../controllers/eventController');
//game
const gameController = require('../controllers/gameController');
//auth
const authController = require('../controllers/authControllers');


/********* ROUTER USER ***************/
router.get('/users/top', userController.getTopUsers);
router.get('/user/:id', userController.getUserById);
router.get('/user/:id/profile/private', /*authenticateToken, ownerControl,*/ userController.findProfilByPk);
router.get('/user/profile/:id', userController.findProfilByPk);
router.get('/find/user', userController.getUserBy);//find/user?nickname=test2login
//router.get('/find/user', userController.getUserBy);//find/user?nickname=test2login
router.post('/registration', validateBody(postUserSchema), userController.registration);
router.post('/users/login', userController.login);
router.post('/refreshToken', authController.refreshToken);
router.post('/users/islogged', userController.isLogged);
router.post('/user/:id/logout', /*authenticateToken, ownerControl,*/ userController.logout);
router.put('/user/:id/update', /*authenticateToken, ownerControl,*/ validateBody(updateUserSchema), userController.updateAnUser);
//router.post('user/:id/addGame', userController.addGame);
router.delete('/user/:id/delete', /*authenticateToken, ownerControl,*/ userController.deleteAnUser);


/***********ROUTER EVENT *********/
router.get('/events', eventController.getAllEvent);
router.get('/event/:id', eventController.getEventById);
router.post('/search/events', eventController.getEventByParams);
router.get('/find/event', eventController.getEventBy);//querystring
router.post('/createEvent/user/:id', /*authenticateToken, ownerControl,*/ validateBody(postEventSchema), eventController.createAnEvent);
router.put('/updateEvent/event/:eventId/user/:id', /*authenticateToken, ownerControl,*/ validateBody(updateEventSchema), eventController.updateAnEvent);
router.post('/eventApply/event/:eventId/user/:id', /*authenticateToken, ownerControl,*/ eventController.applyEvent);
router.put('/updateEvent/event/:eventId/owner/:id/addUserOn/:userId',/*authenticateToken, ownerControl,*/ eventController.acceptUserOnEvent);
router.put('/updateEvent/event/:eventId/owner/:id/kickUser/:userId', /*authenticateToken, ownerControl,*/ eventController.kickUserOnEvent);
router.delete('/deleteEvent/event/:eventId/user/:id', /*authenticateToken, ownerControl,*/ eventController.deleteAnEvent);

/********** ROUTER EVENT'S USER **************/
router.get('/user/:nickname/events', eventController.getAllEventFromUserByNickname);

/********** ROUTER GAME **********************/
router.get('/games', gameController.getAllGame);
router.get('/game/:id', gameController.getGameById);

/********** ROUTER PASSWORD *****************/
router.post('/password/forgot', authController.forgotPassword);
router.put('/password/createNew', authController.createNewPassword);





/*********** ERROR 500 midleware ************/
//router.use(serverError);

module.exports = router;

