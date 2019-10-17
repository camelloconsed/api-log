const axios = require('axios');

export default () => {
  const logger = {};

  logger.show = async (params) => {
    console.log(params);
    return params;
  };
  logger.list = async (params) => {
    console.log(params);
    return params;
  };
  logger.store = async (params) => {
    console.log(params);
    return params;
  };
  logger.update = async (params) => {
    console.log(params);
    return params;
  };
  logger.delete = async (params) => {
    console.log(params);
    return params;
  };
  return logger;
};
