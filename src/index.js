import Koa from 'koa';
import bodyParser from 'koa-body';
import json from 'koa-json';
import mongoose from 'mongoose';
import Routes from './routes';
import Log from './services/logger';

require('dotenv').config();


const app = new Koa();
const routes = Routes();
const logger = Log();
const Sentry = require('@sentry/node');

if (process.env.ENVIRONMENT === 'production') {
  Sentry.init({ dsn: process.env.SENTRY });
}

mongoose
  .connect(`mongodb://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBHOST}/${process.env.DBNAME}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    throw err;
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

const server = app.listen('7000');
console.log(`Server running on port ${server.address().port} ...`);
