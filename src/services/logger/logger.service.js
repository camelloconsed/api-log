import Log from '../../../models/log';

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
      const page = parseInt(params.request.query.page, 10) || 0;
      const limit = parseInt(params.request.query.limit, 10) || 10;
      const startDate = new Date(params.request.query.startDate);
      const endDate = new Date(params.request.query.endDate);
      const logs = await Log.find({
        date: { $gte: startDate, $lte: endDate },
      })
        .skip(page * limit)
        .limit(limit)
        .sort({
          date: -1,
        })
        .exec();
      if (startDate > endDate) {
        throw Error('The startDate must be less than the final date');
      }
      if (!logs) {
        throw Error('Logs not found in this date range');
      }

      return new Response(
        CONSTS.RESPONSES.LOGS.LIST.SUCCESS,
        CONSTS.HTTP.CODES.OK,
        logs,
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
      const {
        type, idMachine, method, actionType, apiId, message, user,
      } = params;

      console.log(idMachine);

      const date = new Date();
      const logDetail = {
        type,
        idMachine,
        method,
        actionType,
        apiId,
        message,
        date,
        user,
      };

      const log = new Log(logDetail);

      log.save((err) => {
        if (err) {
          throw err;
        }
      });

      return new Response(
        CONSTS.RESPONSES.LOGS.STORE.SUCCESS,
        CONSTS.HTTP.CODES.OK,
        'Log successfully saved.',
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
