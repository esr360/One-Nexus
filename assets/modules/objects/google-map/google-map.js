(function ($) {
    
    /**
     * 
     * KAYZEN
     * @module: 'google-map'
     * @author: @esr360
     * 
     */
 
    $.fn.googleMap = function(custom) {
        
        // Options
        
        // Fetch the map colors from the CSS
        var _mapColor = _modules['google-map']['colors'];
        
        var options = $.extend({
            styles: [
                {
                    "featureType" : "water", 
                    "elementType" : "geometry",
                    "stylers" : [{
                        "color" : _mapColor['water']
                    }]
                },
                {
                    "featureType" : "landscape",
                    "elementType" : "geometry",
                    "stylers" : [{
                        "color" : _mapColor['landscape']
                    }]
                },
                {
                    "featureType" : "road",
                    "elementType" : "geometry",
                    "stylers" : [
                        { "color" : _mapColor['road'] },
                        { "lightness" : -37 }
                    ]
                },
                {
                    "featureType" : "poi",
                    "elementType" : "geometry",
                    "stylers" : [{
                        "color" : _mapColor['poi']
                    }]
                },
                {
                    "featureType" : "transit",
                    "elementType" : "geometry",
                    "stylers" : [{
                        "color" : _mapColor['transit']
                    }]
                },
                {
                    "elementType" : "labels.text.stroke",
                    "stylers" : [
                        { "visibility" : "on" },
                        { "color" : _mapColor['stroke'] },
                        { "weight" : 2 },
                        { "gamma" : 0.84 }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        { "color": _mapColor['highway'] }
                    ]
                },
                {
                    "elementType" : "labels.text.fill",
                    "stylers" : [{
                        "color" : "#ffffff"
                    }]
                },
                {
                    "featureType" : "administrative",
                    "elementType" : "geometry",
                    "stylers" : [
                        { "weight" : 0.6 },
                        { "color" : _mapColor['administrative'] }
                    ]
                },
                {
                    "elementType" : "labels.icon",
                    "stylers" : [{
                        "visibility" : "off"
                    }]
                },
                {
                    "featureType" : "poi.park",
                    "elementType" : "geometry",
                    "stylers" : [{
                        "color" : _mapColor['park']
                    }]
                }
            ],
            longitude: _modules['google-map']['location'][0],
            latitude: _modules['google-map']['location'][1],
            zoom: 14,
            headerTrigger : '#toggleHeader'
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {

            // When the window has finished loading create our google map
            google.maps.event.addDomListener(window, 'load', init);

            // Get the HTML DOM element that will contain your map 
            var mapElement = $(this)[0];
            
            function init() {
            
                // When the window has finished loading create our google map
                if($(this).length == 1) {
                    google.maps.event.addDomListener(window, 'load', init);
                }
                    
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    
                    // How zoomed in you want the map to start at (always required)
                    zoom: options.zoom,

                    // Disable scroll-wheel zoom
                    scrollwheel: false,

                    draggable: false,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(options.longitude, options.latitude), 

                    // How you would like to style the map? 
                    // This is where you would paste any style found on Snazzy Maps.
                    
                    styles: options.styles
                    
                };

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);
                
            } // init()

        }); // this.each
 
    }; // googleMap()
 
}(jQuery));