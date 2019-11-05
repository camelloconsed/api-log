import KoaRouter from 'koa-router';
import Logger from '../services/logger';

const koaBody = require('koa-body')({
  multipart: true,
});

export default () => {
  const logger = Logger();
  const routes = new KoaRouter();
  /* Get All Logs */
  routes.get('/', async (ctx) => {
    console.log(ctx);
    ctx.body = await logger.list(ctx);
  });
  /* Get Especific log */
  routes.get('/log/:logID', koaBody, async (ctx) => {
    ctx.body = await logger.show(koaBody, ctx);
  });
  /* Store Log */
  routes.post('/log', koaBody, async (ctx) => {
    ctx.body = await logger.store(koaBody, ctx);
  });
  /* Update Log */
  routes.put('/log/:logID', async (ctx) => {
    ctx.body = await logger.update(koaBody, ctx);
  });
  /* Delete Log */
  routes.delete('/log/:logID', async (ctx) => {
    console.log('aaaa');
    ctx.body = await logger.delete(koaBody, ctx);
  });
  return routes;
};
