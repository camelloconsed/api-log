const axios = require('axios');

export default () => {
  const logger = {};

  logger.test = (ctx) => {
    console.log(ctx);
  };
  return logger;
};
