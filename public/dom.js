function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 31.8, lng: 35.2 },
    zoom: 3
  });
  google.maps.event.addListener(
    map,
    "bounds_changed",
    (function() {
      var timer;
      return function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
          var latlng = map.getCenter();
          var lat = latlng.lat();
          var lng = latlng.lng();

          console.log("Lat :" + lat + "\n lng: " + lng);
          // alert("Lat :"+lat+"\n lng: "+lng);
          sendRequest(lat, lng);
        }, 1000);
      };
    })()
  );
}

function updateDocument(data) {
  var container = document.getElementById("con");

  while (container.firstChild) {
    container.firstChild.remove();
  }

  data.forEach(function(article) {
    var div = document.createElement("div");
    div.className = "article";
    var anchor = document.createElement("a");
    anchor.href = article.url;
    anchor.setAttribute("target", "_blank");
    var image = document.createElement("img");
    image.src = article.urlImage;

    var title = document.createElement("h2");
    title.appendChild(document.createTextNode(article.title));
    anchor.appendChild(image);
    var description = document.createElement("span");
    description.textContent = article.description;

    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(anchor);
    container.appendChild(div);
  });
}
