
const staticHandler = require('./statichandler');

const urlPackage = require('url');

const apiHandler = require('./apihandler');

const router=(req, res) => {
  const url = req.url;
  if (url==='/'){
    staticHandler(__dirname + '/../index.html',res, 'text/html');
}
else if (url.split('.')[1]=== 'js') {
  staticHandler(__dirname+'/..' + url, res, 'application/javascript');}
  else if (url.split('.')[1]=== 'css') {
    staticHandler(__dirname+'/..'+url, res, 'text/css');

}
else if (url.slice(1,4)=== 'api') {
 const parameters=urlPackage.parse(url,true).query;
 const lat=parameters.lat;
 const long=parameters.long;
 console.log("LAt :"+lat);
 console.log("long: "+long);
  apiHandler(lat,long,res);
}


else {
res.writeHead(404);
res.end('File not found');
}

}

module.exports=router;
