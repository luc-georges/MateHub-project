const path = require('path');
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
    components:{},
      info: {
        title: "Matehub API",
        description: "Serves datas for Matehub client",
        version: "1.0.0"
      },
     servers:["http://localhost:3001"],
      filter: true
}

  const options = {
    swaggerDefinition,
    apis: [path.resolve("router/router.js"),path.resolve("doc/components.yaml")]
  };


  const swaggerSpec = swaggerJSDoc(options)
  module.exports = swaggerSpec;