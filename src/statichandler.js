var fs = require('fs');

const staticHandler=(filePath,res)=>{
fs.readFile(filePath , (err,file)=>{
if (err){

  console.log("Sorry there was an error our end" + err);
res.writeHead(500);
res.end();
}else{

res.writeHead(200,{
'Content-Type':'text/html'

});
res.end(file);

}


});



}

module.exports=staticHandler;
