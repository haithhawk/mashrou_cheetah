
var staticHandler = require('./statichandler');
var urlPackage=require('url');
var apiHandler = require('./apihandler');
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
else if (url.slice(1,4)=== 'api') {
 var parameters=urlPackage.parse(url,true).query;
 var lat=parameters.lat;
 var long=parameters.long;
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
