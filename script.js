document.addEventListener('DOMContentLoaded', function() {
  var appid= "9c156941b46dc28d6dd3c70b7a93f9c6";
  var local = document.getElementById("locale");
  var temp = document.getElementById("temp_C");
  var clima = document.getElementById("clima");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      var url = "http://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+ long +"&APPID="+appid;
      var json_obj= JSON.parse(Get(url));
      local.innerHTML = json_obj.name;
      temp.innerHTML = K_convert(json_obj.main.temp) + " ºC";
      clima.innerHTML = clima.innerHTML = json_obj.weather[0].main;
      
      
    });
  }    
  function showPosition(position) {
    x.innerHTML = position;
    }  
  function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

function K_convert(temp){
  var c = temp - 273;
  return parseInt(c);
}
 
});
