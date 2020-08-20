const express = require('express');
const routerNews = express.Router();
const lolNewsController = require('../controllers/newsApi/lolNewsController');

routerNews.get('/lol/news', lolNewsController.getLolNews);

module.exports = routerNews;

