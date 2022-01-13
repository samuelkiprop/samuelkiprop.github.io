function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 0.5195071761628482, lng: 35.27487468379355};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Eldoret, Kenya' // Title Location
    });
}