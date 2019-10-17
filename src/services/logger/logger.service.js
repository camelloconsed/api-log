const axios = require('axios');

export default () => {
  const logger = {};

  logger.show = async (params) => {
    console.log(params);
  };
  logger.list = async (params) => {
    console.log(params);
  };
  logger.store = async (params) => {
    console.log(params);
    return params;
  };
  logger.update = async (params) => {
    console.log(params);
  };
  logger.delete = async (params) => {
    console.log(params);
  };
  return logger;
};
