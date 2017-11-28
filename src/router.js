
var staticHandler = require('./statichandler');
const router=(req,res) =>{

const url = req.url;
console.log(url);
if (url==='/'){

staticHandler(__dirname+'/../index.html',res);

}


}

module.exports=router;
