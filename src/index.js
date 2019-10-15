import Log from './services/logger';

const Koa = require('koa');
const KoaRouter = require('koa-router');
const koaBody = require('koa-body');
const json = require('koa-json');

const app = new Koa();
const router = new KoaRouter();

const logger = Log();

app.use(json());

router.post('/test', koaBody(), ctx => {
  ctx.body = logger.test(ctx);
});

app
  .use(router.routes())
  .use(router.allowedMethods());

const server = app.listen('5001');
console.log(`Server running on port ${server.address().port} ...`);
