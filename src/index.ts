import jsonServer from 'json-server';

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

const router = jsonServer.router(require('./api/')());

server.use(middlewares);
server.use(require('./routes'));

server.use(jsonServer.bodyParser);
server.use(jsonServer.rewriter({ '/api/*': '/$1' }));
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running in http://localhost:${port}`);
});
