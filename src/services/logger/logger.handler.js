// import validator from '../../validator';
// import getSchema from '../../schemes/logger/get';
// import storeSchema from '../../schemes/logger/store';


export default ({ loggerService }) => {
  const logger = {};

  logger.test = (ctx) => loggerService.test(ctx);
  logger.get = (ctx) => loggerService.get(ctx);
  logger.getAll = (ctx) => loggerService.getAll(ctx);
  logger.store = (koaBody, ctx) => loggerService.store(ctx.request.body.logID);

  return logger;
};
