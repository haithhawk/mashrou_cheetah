
var staticHandler = require('./statichandler');
const router=(req,res) =>{

const url = req.url;
console.log(url);
if (url==='/'){

staticHandler(__dirname+'/../index.html',res, 'text/html');
}
else if (url.split('.')[1]=== 'js') {
  staticHandler(__dirname+'/..'+url, res, 'application/javascript');

}
else if (url.split('.')[1]=== 'css') {
  staticHandler(__dirname+'/..'+url, res, 'text/css');

}
else {
res.writeHead(404);
res.end('File not found');
}

}

module.exports=router;
