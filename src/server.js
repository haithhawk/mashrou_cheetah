var http = require('http');
var router = require('./router')
var port = 3002 ;
var server = http.createServer(router);

server.listen(port, ()=>{
console.log("server is listening on port " + port);
});
