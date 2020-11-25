require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

/*cors*/
const cors = require('cors');

// router
const router = require('./router/router');
const routerNews = require('./router/routerNews')
const routerGameApi = require('./router/routerGameApi')
const app = express();

//Swagger
const swaggerSpec = require(path.resolve('doc/swaggerOptions'))
const swaggerUi = require("swagger-ui-express");



/*Logs FIle*/

// const logStream = fs.createWriteStream(path.join("logs", "access.log"), { flags: "a" });
// morgan.token("error", (_, res) => res.data.error);
// app.use(
//   morgan(
//     ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"\n:err',
//     { stream: logStream }
//   )
// );

app.use(fileUpload({
  createParentPath: true
}));
app.use(express.static('../matehub-app/src/assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const corsOptions = {
  credentials : true
}
/*cors*/
app.use(cors(corsOptions));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const session = require('express-session');
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: '4701cb7e-28fa-48d0-98e3-d44e177582cf'
}));



app.use(router);
app.use(routerNews);
app.use(routerGameApi);
  app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(swaggerSpec, {
          swaggerOptions: {
            deepLinking: true,
            filter: true,
            defaultModelsExpandDepth: -1,
            defaultModelExpandDepth: 3
          },}
        ));



const port = process.env.PORT || 3001;

app.listen(port, _ => {
console.log(`Running on ${port}`)
});



