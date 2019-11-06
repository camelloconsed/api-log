import logModel from '../../../models/log';

const axios = require('axios');

export default () => {
  const logger = {};

  logger.show = async (params) => {
    return params;
  };
  logger.list = async (params) => {
    return params;
  };
  logger.store = async params => {
    console.log(params.body.test);
    return params;
  };
  logger.update = async (params) => {
    return params;
  };
  logger.delete = async (params) => {
    return params;
  };
  return logger;
};
