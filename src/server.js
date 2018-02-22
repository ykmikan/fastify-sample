const swaggerTools = require('swagger-tools');
const fastify = require('fastify')({
  ajv: {
    removeAdditional: true, // remove undefined querystring, body, response...
  },
});

fastify.decorate('conf', require('@config'));

// swagger setting
// must set before setting router
fastify.register(require('fastify-swagger'), {
  swagger: {
    info: {
      title: 'Fastify Sample API Swagger UI',
      description: 'console styling swagger api.',
      version: '1.0.0'
    },
    host: `localhost:${fastify.conf.port}`,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  }
});

// set routes
fastify.register(require('./routes/sample/router'), { prefix: '/api/sample' });


// set swagger ui setting
fastify.register((instance, opts, next) => {
  const swaggerDoc = fastify.swagger({ yml: true, exposeRoute: true });

  swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
    // Serve the Swagger documents and Swagger UI
    fastify.use(middleware.swaggerUi());
    middleware.swaggerUi();

    next();
  });
});

module.exports = fastify;
