var http = require("http");
var router = require("./router");
var port = process.env.PORT || 3003;
var hostname = process.env.HOST || "localhost";
var server = http.createServer(router);

server.listen(port, () => {
  console.log(`Server is listening at http://${hostname}:${port}`);
});
