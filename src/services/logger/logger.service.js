import Response from '../../responses';
import Consts from '../../config/constants';

const CONSTS = Consts();
const axios = require('axios');

export default () => {
  const logger = {};

  logger.show = async (params) => {
    try {
      return new Response(
        CONSTS.RESPONSES.LOGS.SHOW.SUCCESS,
        CONSTS.HTTP.CODES.OK,
        'payload',
      );
    } catch (err) {
      return new Response(
        CONSTS.RESPONSES.LOGS.SHOW.ERROR,
        CONSTS.HTTP.CODES.INTERNAL_SERVER_ERROR,
        err.message,
      );
    }
  };
  logger.list = async (params) => {
    try {
      return new Response(
        CONSTS.RESPONSES.LOGS.LIST.SUCCESS,
        CONSTS.HTTP.CODES.OK,
        'payload',
      );
    } catch (err) {
      return new Response(
        CONSTS.RESPONSES.LOGS.LIST.ERROR,
        CONSTS.HTTP.CODES.INTERNAL_SERVER_ERROR,
        err.message,
      );
    }
  };
  logger.store = async (params) => {
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

  return logger;
};
