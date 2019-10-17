const axios = require('axios');

export default () => {
  const logger = {};

  logger.getLog = async (params) => {
    console.log(params);
  };
  logger.getAll = async (params) => {
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
