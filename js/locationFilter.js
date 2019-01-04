jQuery(document).ready(function($){

    function checkLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getLocation,locationFailed);
        }
        else {
        }
    }

    function getLocation(position){
        var latCoord = position.coords.latitude;
        var lonCoord = position.coords.longitude;
        var gMapsKey = 'API KEY'; // Insert your Google API Key using 'Geocoding API'

        $.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latCoord + ',' + lonCoord + '&key='+gMapsKey, function(data) {
        var cityName = data.results[0].address_components[3].long_name;
            if (cityName === 'Toronto') {
                document.getElementById("cityBox").innerHTML = "<div class=\"col-12 mt-5 p-5 bg-primary\">"+cityName+"</div>";
            }
            else {
                document.getElementById("cityBox").innerHTML = "<div class=\"col-12 mt-5 p-5 bg-danger\">"+cityName+"</div>";
            }
        });
        
    }

    function locationFailed(){
    }

    checkLocation();
});