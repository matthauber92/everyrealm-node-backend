const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    swagger: "2.0",
    info: {
      title: "EveryRealm API overview",
      version: "v2"
    },
  },
  apis: ['./src/routes/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);
