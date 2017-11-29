var http = require("http");
var router = require("./router");
var port = process.env.PORT || 3003;
var server = http.createServer(router);

server.listen(port, () => {
  console.log("server is listening on port " + port);
});
