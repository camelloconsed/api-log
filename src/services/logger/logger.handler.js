// import validator from '../../validator';
// import getSchema from '../../schemes/logger/get';
// import storeSchema from '../../schemes/logger/store';


export default ({ loggerService }) => {
  const logger = {};

  logger.test = (ctx) => loggerService.test(ctx);
  logger.show = (ctx) => loggerService.show(ctx);
  logger.list = (ctx) => loggerService.list(ctx);
  logger.store = (koaBody, ctx) => loggerService.store(ctx.request.body.user);
  return logger;
};
