const request = require("request");

const apiHandler = (lat, long, res) => {
  let urlAddress =
    "https://api.opencagedata.com/geocode/v1/json?q=+" +
    lat +
    "+" +
    long +
    "&key=b740ce0843e342a7a344c30d9b8a37f3";

  request(urlAddress, (err, response, body) => {
    var result = JSON.parse(body).results;

    if (result[0]) {
      var country = result[0].components.country;
      getNews(country, res);
    } else {
      res.writeHead(200);
      res.end(
        JSON.stringify({ result: "NO result. Choose  another location" })
      );
    }
  });

  function getNews(country) {
    var newsUrl =
      "https://newsapi.org/v2/everything?q=" +
      country +
      "&apiKey=c15c82672fbe4a2b8f1bb7612e332801";
    request(newsUrl, (err, response, body) => {
      var resultNews = [];

      var articles = JSON.parse(body).articles;
      //console.log(articles[0])
      for (var i = 0; i < articles.length; i++) {
        if (!articles[i].description && !articles[i].urlToImage) {
          console.log(i);
          continue;
        } else {
          resultNews.push({
            title: articles[i].title,
            description: articles[i].description,
            url: articles[i].url,
            urlImage: articles[i].urlToImage
          });
        }
      }

      res.writeHead(200);
      res.end(JSON.stringify({ result: resultNews }));
    });
  }
};

module.exports = apiHandler;
