import Koa from 'koa';
import bodyParser from 'koa-body';
import json from 'koa-json';
import mongoose from 'mongoose';
import Routes from './routes';
import Log from './services/logger';

const app = new Koa();
const routes = Routes();

const logger = Log();

mongoose
  .connect('mongodb://juako:123123@127.0.0.1:27017/logDB', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log('DB disconnected');
  });

app.use(json());

routes.post('/test', ctx => {
  ctx.body = logger.test(ctx);
});

app
  .use(json())
  .use(bodyParser())
  .use(routes.routes())
  .use(routes.allowedMethods());

const server = app.listen('3001');
console.log(`Server running on port ${server.address().port} ...`);
