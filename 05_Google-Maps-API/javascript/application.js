//Add your Javascript code here
/*
This is a small Google Maps API Application
http://www.w3schools.com/googleapi/default.asp
*/


$(document).ready(function(){

	function initialize() {
      var mapProp = {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
        mapTypeId:google.maps.MapTypeId.ROADMAP
      };
      
      var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
    
    google.maps.event.addDomListener(window, 'load', initialize);



}); //end of document ready function