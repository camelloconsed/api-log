import LoggerService from './logger.service';
import LoggerHandler from './logger.handler';

export default () => {
  const loggerService = LoggerService();
  const loggerHandler = LoggerHandler({ loggerService });

  return {
    test: loggerHandler.test,
    list: loggerHandler.list,
    show: loggerHandler.show,
    store: loggerHandler.store,
    update: loggerHandler.update,
    delete: loggerHandler.delete,
  };
};
