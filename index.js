var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('newyorkmap'), {
          zoom: 15,
          center: new google.maps.LatLng(40.731500,-73.880842),
          mapTypeId: 'terrain'
        });
var script = document.createElement('script');
 script.src = 'http://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson&callback=handleResponse';
        document.getElementsByTagName('head')[0].appendChild(script);
        window.handleResponse = function(results) {
    for (var i = 0; i < results.features.length; i++) {
          var coordslen =  results.features[i].geometry.coordinates[0].length;

          
          for (var j =coordslen - 1; j >= 0; j--) {
            var coords = results.features[i].geometry.coordinates[0][j];
            var latLng = new google.maps.LatLng(coords[1],coords[0]);
            var trip=[]
            trip.push(latLng);
        var path = new google.maps.Polyline({
          path: trip,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
          path.setMap(map);
        }
      }
    }
    }