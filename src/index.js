import Koa from 'koa';
import koaBody from 'koa-body';
import json from 'koa-json';
import Routes from './routes';


const app = new Koa();
const routes = Routes();

app
  .use(json())
  .use(koaBody())
  .use(routes.routes())
  .use(routes.allowedMethods());

const server = app.listen('5001');
console.log(`Server running on port ${server.address().port} ...`);
