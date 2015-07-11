var myCenter=new google.maps.LatLng(32.690828, -96.823736);
var marker;

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:17,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("mappina"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  animation:google.maps.Animation.BOUNCE
  });

marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

function sendMail() {
    var link = "mailto:mattia.crippa.brqw@alice.it";
    window.location.href = link;
}