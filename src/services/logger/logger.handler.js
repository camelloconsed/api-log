import validator from '../../validator';
// import getSchema from '../../schemes/logger/get';
import storeSchema from '../../schemes/logger/store';

export default ({ loggerService }) => {
  const logger = {};

  logger.test = (ctx) => loggerService.test(ctx);
  logger.show = (ctx) => loggerService.show(ctx);
  logger.list = (ctx) => loggerService.list(ctx);
  logger.store = (ctx) => validator(
    storeSchema,
    {
      user: ctx.request.body.user,
      idMachine: ctx.request.body.idMachine,
      message: ctx.request.body.message,
      method: ctx.request.body.method,
      apiId: ctx.request.body.apiId,
      type: ctx.request.body.type,
      actionType: ctx.request.body.actionType,
    },
    loggerService.store,
  );

  return logger;
};
