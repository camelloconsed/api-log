import Response from '../../responses';
import Consts from '../../config/constants';

const CONSTS = Consts();
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
    try {
      return new Response(
        CONSTS.RESPONSES.LOGS.STORE.SUCCESS,
        CONSTS.HTTP.CODES.OK,
        'payload',
      );
    } catch (err) {
      return new Response(
        CONSTS.RESPONSES.LOGS.STORE.ERROR,
        CONSTS.HTTP.CODES.INTERNAL_SERVER_ERROR,
        err.message,
      );
    }
  };
  logger.update = async (params) => {
    return params;
  };
  logger.delete = async (params) => {
    return params;
  };
  return logger;
};
