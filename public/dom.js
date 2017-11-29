var map;
function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
     center: {lat: 31.8, lng: 35.2},
     zoom: 3
   });
   /*
   map.addListener('center_changed', function() {

     window.setTimeout(function(){
             var latlng=map.getCenter();
             var lat=latlng.lat();
             var lng=latlng.lng();

      console.log("Lat :"+lat+"\n lng: "+lng);
      alert("Lat :"+lat+"\n lng: "+lng);


},1000);
   });
*/
google.maps.event.addListener(map, 'bounds_changed', (function () {
    var timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
          var latlng=map.getCenter();
          var lat=latlng.lat();
          var lng=latlng.lng();

   console.log("Lat :"+lat+"\n lng: "+lng);
  // alert("Lat :"+lat+"\n lng: "+lng);
    sendRequest(lat,lng);

 }, 1000);
    }
}()));
}

function updateDocument(data){

var container=document.getElementById('con');


data.forEach((article)=>{

var image=document.createElement('img');
image.src=article.urlImage;

container.appendChild(image);


});

}
