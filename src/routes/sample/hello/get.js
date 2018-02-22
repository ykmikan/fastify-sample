const validations = {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        userName: { type: 'string' },
        greeting: { type: 'string' },
      },
      required: ['userName'],
    },
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        }
      }
    }
  }
};

module.exports = [validations, async (request, reply) => {
  const {
    userName = 'Guest',
    greeting = 'Hello!!',
  } = request.query;


  reply.send({ message: `${userName}, ${greeting}`});
}];
