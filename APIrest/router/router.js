
/** Express router providing user related routes
 * @module routers/App
 * @requires express
 */

/**
 * express module
 * @const
 */
const express = require('express');


/**
 * 
 * Express router to mount user related functions on.
 * @type {object}
 * @const
 * @namespace usersRouter
 */
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

/**
 * @swagger
 * /users/top:
 *   get:
 *     tags:
 *       - Users
 *     summary: Show  list of 10 top users
 *     description: List of 10 top **users** with detail about their activity on the app
 *     responses:
 *       "200":
 *         description: A JSON array of user objects with their total events, and total envents by games and languages nested in it
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/User"
 * 
 */
/********* ROUTER USER ***************/
router.get('/users/top', userController.getTopUsers);
/**
 * @swagger
 * /user/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get user by his ID
 *     description: get.
 *     parameters:
 *       - $ref: "#/components/parameters/UserID"
 *     responses:
 *       "200":
 *         description: Success. returns an object containing the details of the selected user .
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                      $ref: "#/components/schemas/User"
 *       "400":
 *         $ref: "#/components/responses/BadRequest"
 *       "404":
 *         $ref: "#/components/responses/UserNotFound"
 */
router.get('/user/:id', userController.getUserById);

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get user private profile by his ID with token verification
 *     description: get.
 *     parameters:
 *       - $ref: "#/components/parameters/UserID"
 *     responses:
 *       "200":
 *         description: Success. returns an object containing the profile details of the selected user .
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                      $ref: "#/components/schemas/User"
 *       "400":
 *         $ref: "#/components/responses/BadRequest"
 *       "404":
 *         $ref: "#/components/responses/UserNotFound"
 */

router.get('/user/:id/profile/private', /*authenticateToken, ownerControl,*/ userController.findProfilByPk);

/**
 * @swagger
 * /user/profile/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get user profile by his ID
 *     description: get.
 *     parameters:
 *       - $ref: "#/components/parameters/UserID"
 *     responses:
 *       "200":
 *         description: Success. returns an object containing all the  details of the selected user .
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                      $ref: "#/components/schemas/User"
 *                     games:
 *                      $ref: "#/components/schemas/games"
 *       "400":
 *         $ref: "#/components/responses/BadRequest"
 *       "404":
 *         $ref: "#/components/responses/UserNotFound"
 */

router.get('/user/profile/:id', userController.findProfilByPk);
router.get('/find/user', userController.getUserBy);//find/user?nickname=test2login
//router.get('/find/user', userController.getUserBy);//find/user?nickname=test2login

router.post('/registration', validateBody(postUserSchema), userController.registration);

/**
 * @swagger
 * /users/login:
 *   post:
 *     tags:
 *       - Users
 *       - Auth
 *     summary: Authenticate a user
 *     description: Login form submission. Returns the logged user if the authentication process succeeds.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/LoginForm"
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: "#/components/schemas/LoginForm"
 *     responses:
 *       "200":
 *         description: Success. An object containing the  logged user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                      $ref: "#/components/schemas/User"
 *       "400":
 *         $ref: "#/components/responses/BadRequest"
 *       "401":
 *         $ref: "#/components/responses/Unauthorized"
 */
router.post('/users/login', userController.login);
router.post('/refreshToken', authController.refreshToken);
router.post('/users/islogged', userController.isLogged);

/**
 * @swagger
 * /user/{id}/logout:
 *   post:
 *     tags:
 *       - Users
 *       - Auth
 *     summary: Disconect a user
 *     description: submit logout . Destroy the session.
 *     responses:
 *       "200":
 *         description: Success. session destroy success.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     logout:
 *                      type: "string"
 *       "400":
 *         $ref: "#/components/responses/BadRequest"
 *       "401":
 *         $ref: "#/components/responses/Unauthorized"
 */
router.post('/user/:id/logout', /*authenticateToken, ownerControl,*/ userController.logout);
router.put('/user/:id/update', /*authenticateToken, ownerControl,*/ validateBody(updateUserSchema), userController.updateAnUser);
//router.post('user/:id/addGame', userController.addGame);
router.delete('/user/:id/delete', /*authenticateToken, ownerControl,*/ userController.deleteAnUser);


/***********ROUTER EVENT *********/
router.get('/events', eventController.getAllEvent);
router.get('/event/:id', eventController.getEventById);
router.post('/search/events/user/:id', eventController.getEventByParams);
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

