import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router.get('/', async (ctx) => {
  ctx.body = {
    status: 'running...',
    code: 200,
    body: ctx.request.body
  }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(7860, () => {
  console.log('Server is running on http://localhost:3000');
});
