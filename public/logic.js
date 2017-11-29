function sendRequest(lat, long) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {

    if (xhr.readyState == 4 && xhr.status == 200) {

      updateDocument(JSON.parse(xhr.responseText).result);

    }


  };
xhr.open("GET", "/api?lat=" + lat + "&long=" + long,true);
xhr.send();


}
