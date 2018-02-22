module.exports = (fastify, opts, next) => {
  fastify.get('/hello', ...require('./hello/get'));
  next();
};
