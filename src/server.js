const http = require("http");
const router = require("./router");
let port = process.env.PORT || 3003;
let hostname = process.env.HOST || "localhost";
let server = http.createServer(router);

server.listen(port, () => {
  console.log(`Server is listening at http://${hostname}:${port}`);
});
