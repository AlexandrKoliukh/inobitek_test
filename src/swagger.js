import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

export const addSwagger = (app) => {
  const swaggerDefinition = {
    info: {
      title: 'Test application API', // Title (required)
      version: '1.0.0', // Version (required)
    },
    basePath: '/', // Base path (optional)
  };

  const options = {
    swaggerDefinition,
    apis: [`${__dirname}/routes.js`],
  };

  const swaggerSpec = swaggerJSDoc(options);

  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};
