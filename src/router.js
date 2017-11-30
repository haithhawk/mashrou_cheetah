var staticHandler = require("./statichandler");
var urlPackage = require("url");
var apiHandler = require("./apihandler");
const paths = ["js", "css"];
const router = (req, res) => {
  const url = req.url;

  filePath = {
    "/": "/../index.html",
    "/public/dom.js": "/.." + url,
    "/public/logic.js": "/.." + url,
    "/public/style.css": "/.." + url
  }[url];

  contentType = {
    "/": "text/html",
    "/public/dom.js": "application/javascript",
    "/public/logic.js": "application/javascript",
    "/public/style.css": "text/css"
  }[url];

  if (url === "/" || paths.includes(url.split(".")[1])) {
    staticHandler(__dirname + filePath, res, contentType);
  } else if (url.slice(1, 4) === "api") {
    var parameters = urlPackage.parse(url, true).query;
    var lat = parameters.lat;
    var long = parameters.long;
    apiHandler(lat, long, res);
  } else {
    res.writeHead(404);
    res.end("File not found");
  }
};

module.exports = router;
