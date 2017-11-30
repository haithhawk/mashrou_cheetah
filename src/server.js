const http = require('http');
const router = require('./router');

const port = 3003;
const server = http.createServer(router);

server.listen(port, () => {
  console.log('server is listening on port' + port);
});
