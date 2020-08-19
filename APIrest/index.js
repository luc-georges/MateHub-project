require('dotenv').config();
const express = require('express');

/*cors*/
const cors = require('cors');

const router = require('./router/router');
const app = express();

/*cors*/
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, _ => {
console.log(`Running on ${port}`)
});


