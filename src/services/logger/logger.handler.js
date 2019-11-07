import validator from '../../validator';
// import getSchema from '../../schemes/logger/get';
import storeSchema from '../../schemes/logger/store';

export default ({ loggerService }) => {
  const logger = {};

  logger.test = (ctx) => loggerService.test(ctx);
  logger.show = (ctx) => loggerService.show(ctx);
  logger.list = (ctx) => loggerService.list(ctx);
<<<<<<< HEAD
  logger.store = (koaBody, ctx) => loggerService.store(ctx);
=======
  logger.store = (koaBody, ctx) => validator(
    storeSchema, {
      user: ctx.request.body.user,
      idMachine: ctx.request.body.idMachine,
      message: ctx.request.body.message,
      method: ctx.request.body.method,
      apiID: ctx.request.body.apiID,
      type: ctx.request.body.type,
      actionType: ctx.request.body.actionType,
    },
    loggerService.store,
  );

>>>>>>> 8646eebd4c9ea5cc275693772322dd9a622897a8
  return logger;
};
