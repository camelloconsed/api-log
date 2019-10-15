import LoggerService from './logger.service';
import LoggerHandler from './logger.handler';

export default () => {
  const loggerService = LoggerService();
  const loggerHandler = LoggerHandler({ loggerService });

  return {
    test: loggerHandler.test,
  };
};
