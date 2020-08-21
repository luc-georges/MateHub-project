require('dotenv').config();
const express = require('express');

/*cors*/
const cors = require('cors');

const router = require('./router/router');
const routerNews = require('./router/routerNews')
const app = express();

const corsOptions = {
  credentials : true
}
/*cors*/
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const session = require('express-session');
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: '4701cb7e-28fa-48d0-98e3-d44e177582cf'
}));

app.use(router);
app.use(routerNews);

const port = process.env.PORT || 3000;

app.listen(port, _ => {
console.log(`Running on ${port}`)
});


