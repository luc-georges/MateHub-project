const express = require('express');
const routerNews = express.Router();
const lolNewsController = require('../controllers/newsApi/lolNewsController');
const url = require('url');

routerNews.get('/lol/news',function(req, res) {
    res.redirect(url.format({
       pathname:"https://simplescraper.io/api/eUlWk5o7c0B7pFmviJ8O",
       query: {
          "apikey": "4AvTfAaCXLRdueCL0nlyT4KTCvcHVBZB",
          "offset": 0,
          "limit":10
       }}))});

       

module.exports = routerNews;

