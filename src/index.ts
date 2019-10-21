import jsonServer from 'json-server';
import { PORT } from './constants';

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const router = jsonServer.router(require('./api/')());

server.use(middlewares);
server.use(require('./routes'));

server.use(jsonServer.bodyParser);
server.use(jsonServer.rewriter({ '/api/*': '/$1' }));
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running in http://localhost:${PORT}`);
});
