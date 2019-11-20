import KoaRouter from 'koa-router';
import Logger from '../services/logger';

const koaBody = require('koa-body');

export default () => {
  const logger = Logger();
  const routes = new KoaRouter();
  /* Get All Logs */
  routes.get('/', async (ctx) => {
    ctx.body = await logger.list(ctx);
  });
  /* Get Especific log */
  routes.get('/log/:logID', koaBody, async (ctx) => {
    ctx.body = await logger.show(koaBody, ctx);
  });
  /* Store Log */
  routes.post('/log', async ctx => {
    ctx.body = await logger.store(
      ctx,
    );
  });
  return routes;
};
