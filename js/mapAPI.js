/*地圖API*/
let map;
/*初始化地圖*/
function initMap(){
    /*地圖自訂樣式*/
    var mystyle = [
    {
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#CCDEA3"
        }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#523735"
        }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
        {
            "color": "#f5f1e6"
        }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
        {
            "color": "#c9b2a6"
        }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
        {
            "color": "#dcd2be"
        }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#ae9e90"
        }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#9CC087"
        }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#9CC087"
        }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#93817c"
        }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "color": "#a5b076"
        }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#447530"
        }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#f5f1e6"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#fdfcf8"
        }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#f8c967"
        }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
        {
            "color": "#e9bc62"
        }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#e98d58"
        }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
        {
            "color": "#db8555"
        }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#806b63"
        }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#9CC087"
        }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#8f7d77"
        }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
        {
            "color": "#CCDEA3"
        }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#9CC087"
        }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "color": "#FFFCF3"
        }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#92998d"
        }
        ]
    }
    ]

    /*初始地點YangMin*/
    var initialLocation = {lat: 25.196566713137578, lng: 121.56767291769518 };

    map = new google.maps.Map(document.getElementById('map'),{center: initialLocation,
    zoom:11,
    styles:mystyle,
    disableDefaultUI: true,
    });

    /*marker初始地點*/
    var marker = new google.maps.Marker({
        position: initialLocation,
        map: map
    });

    /*點擊事件切換地圖*/
    document.getElementById('ToMingChi').addEventListener('click', function() {
        /*切換*/        
        var newLocation = {lat: 24.651070250430898, lng: 121.47147114453871};

        /*地圖中心到新位置*/ 
        map.setCenter(newLocation);

        /*Marker到新位置*/
        marker.setPosition(newLocation);

        /*地圖維持zoom:12 */
        map.setZoom(11); 
    });

    document.getElementById('MingChi').addEventListener('click', function() {
        /*切換*/        
        var newLocation = {lat: 24.651070250430898, lng: 121.47147114453871};

        /*地圖中心到新位置*/ 
        map.setCenter(newLocation);

        /*Marker到新位置*/
        marker.setPosition(newLocation);

        /*地圖維持zoom:12 */
        map.setZoom(11); 
    });

    document.getElementById('ToYangMin').addEventListener('click', function() {
        map.setCenter(initialLocation);
        marker.setPosition(initialLocation);
        map.setZoom(11);
    });
    document.getElementById('YangMin').addEventListener('click', function() {
        map.setCenter(initialLocation);
        marker.setPosition(initialLocation);
        map.setZoom(11);
    });


    document.getElementById('ToChiLan').addEventListener('click', function() {
        var newLocation = {lat: 24.582094365110954, lng: 121.49118834467622};
        map.setCenter(newLocation);
        marker.setPosition(newLocation);
        map.setZoom(11); 
    });

    document.getElementById('ChiLan').addEventListener('click', function() {
        var newLocation = {lat: 24.582094365110954, lng: 121.49118834467622};
        map.setCenter(newLocation);
        marker.setPosition(newLocation);
        map.setZoom(11); 
    });

    document.getElementById('ToNanToi').addEventListener('click', function() {
        var newLocation = {lat: 23.851835521050248,lng: 120.9470114833781};
        map.setCenter(newLocation);
        marker.setPosition(newLocation);
        map.setZoom(11); 
    });

    document.getElementById('NanToi').addEventListener('click', function() {
        var newLocation = {lat: 23.851835521050248,lng: 120.9470114833781};
        map.setCenter(newLocation);
        marker.setPosition(newLocation);
        map.setZoom(11); 
    });

    document.getElementById('ToKaou').addEventListener('click', function() {               
        var newLocation = {lat: 23.002646412688645, lng: 120.65469575907538};
        map.setCenter(newLocation);
        marker.setPosition(newLocation);
        map.setZoom(11); 
    });

    document.getElementById('Kaou').addEventListener('click', function() {               
        var newLocation = {lat: 23.002646412688645, lng: 120.65469575907538};
        map.setCenter(newLocation);
        marker.setPosition(newLocation);
        map.setZoom(11); 
    });
}