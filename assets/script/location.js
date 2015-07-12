function initialize() {
var id = 1;
var coord;
	
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://frankgym.altervista.org/php/getLocation.php", //Relative or absolute path to file.php file
        async: false,
        data: {location:id},
        success: function(response) {
            var location=JSON.parse(response);
            $('#phone').html(location[0].phone);
            $('#fax').html(location[0].fax);
            $('#email').html(location[0].email);
            $('#addr').html(location[0].addr);
            coord = [location[0].Latitudine, location[0].Longitudine];
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });    

	var myCenter=new google.maps.LatLng(coord[0], coord[1]);

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