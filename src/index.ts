import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router(require('./api/')());
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(require('./routes'));

server.use(jsonServer.bodyParser);
server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running');
});
