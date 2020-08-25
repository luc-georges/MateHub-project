const express = require('express');
const routerGameApi = express.Router();
const ApiLolController = require('../controllers/gameApi/ApiLolController');


routerGameApi.get('/lolApi/summoner/:region/:summoner_name',ApiLolController.getLolId);
routerGameApi.get('/lolApi/stats/:region/:sum_id',ApiLolController.getLolStats);

routerGameApi.post('/lolApi/summoner/:userId/:gameId', ApiLolController.InsertSummoner);


module.exports = routerGameApi;