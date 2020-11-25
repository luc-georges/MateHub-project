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
console.log(path.resolve("doc/*.yaml"))
  const options = {
    swaggerDefinition,
    apis: [path.resolve("router/router.js"),path.resolve("doc/components.yaml")]
  };

  console.log(path.resolve("router/router.js"))
  const swaggerSpec = swaggerJSDoc(options)
  module.exports = swaggerSpec;