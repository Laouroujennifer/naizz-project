const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Naizz API",
      version: "1.0.0",
      description:
        "Naizz API Documentation Using Node.js Express",
    },
  },
  apis: ["./src/routes/*.js"],
};

const specs = swaggerJsDoc(options);

module.exports = (app) => {
  app.use("/api/naizz/docs", swaggerUi.serve, swaggerUi.setup(specs));
};
