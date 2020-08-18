require('dotenv').config();
const express = require('express');

const router = require('./router/router');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, _ => {
console.log(`Running on ${port}`)
});


