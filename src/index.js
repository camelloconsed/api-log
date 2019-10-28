import Log from './services/logger';

const Koa = require('koa');
const KoaRouter = require('koa-router');
const koaBody = require('koa-body');
const json = require('koa-json');
const mongoose = require('mongoose');

const app = new Koa();
const router = new KoaRouter();

const logger = Log();

mongoose
  .connect('mongodb://admin:123123@127.0.0.1:27017/logDB', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log('DB disconnected');
  });

app.use(json());

router.post('/test', koaBody(), ctx => {
  ctx.body = logger.test(ctx);
});

app
  .use(router.routes())
  .use(router.allowedMethods());

const server = app.listen('5001');
console.log(`Server running on port ${server.address().port} ...`);
