function initMap() {

    var map = new google.maps.Map(document.getElementById('ieatmaps'), {
      center: {lat: 30.517609, lng: 76.65957},
      zoom: 14,
       });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(30.517609 , 76.65957)
        , title: 'ASL'
        , map : map

    });
  }
