function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: new google.maps.LatLng(40.7291,-73.9965),
          mapTypeId: 'terrain'
        });
 var script = document.createElement('script');
 script.src = 'https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD&jsonp=myfun';
        document.getElementsByTagName('head')[0].appendChild(script);
      }
 window.myfun = function(results) {
for (var i = 0; i < results.data.length; i++) {
var arr =  results.data[i];
var str = arr[9]
           var c1 = str.substr(7,18)
           var c2 = str.substr(25,18)
           c2 = c2.replace(")","")
            var latLng = new google.maps.LatLng(c2,c1);
             var service = new google.maps.DistanceMatrixService();
    var origin1 = new google.maps.LatLng(c2,c1);
    var origin2 = "center";
    var destinationA = ' NYU Stern school';
    var destinationB = new google.maps.LatLng(40.7291, -73.9965);
    service.getDistanceMatrix(
      {
        origins: [origin1,origin2],
        destinations: [destinationA, destinationB],
        travelMode: 'DRIVING',
        // transitOptions: TransitOptions,
        // drivingOptions: DrivingOptions,
        // unitSystem: UnitSystem,
        // avoidHighways: Boolean,
        // avoidTolls: Boolean,
      }, callback);
      function callback(response, status) {
         if (status == 'OK') {
        var response.rows[0].distance=dataset}
      };
            var marker = new google.maps.Marker({
              position: latLng,
              map: map
            });
 marker.addListener('click', function() {
                map.center = new google.maps.LatLng(c2,c1);
                infowindow.open(map,marker);
            });
 }
      }
      
      