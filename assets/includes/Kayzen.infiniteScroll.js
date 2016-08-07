(function ($) {
    
    /**
     *
     * Kayzen.infiniteScroll
     * @author @esr360
     * @description Uses "Isotope" (optional) and "Infinite Ajax Scroll" plugins
     *
     */
 
    $.fn.KayenInfiniteScroll = function(custom, callback) {
        
        // Options
        var options = $.extend({
            
            isotopeGrid : true,
            loadSpinner : true,
            delay       : 600,
            pagination  : '#pagination',
            next        : '.next a',
            endText     : 'You have reached the end!'
            
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {
            
            var row = this.id;
            var col = $(this).children().attr('class').split(' ')[0];
            
            // Convert the passed element into an Isotope grid
            if (options.isotopeGrid) {
                var isotopeGrid = new Isotope(this, {
                    itemSelector     : '.' + col
                });
            }
            
            // Set the infinite scroll options
            var ias = $.ias({
                container  : '#' + row,
                item       : '.' + col,
                pagination : options.pagination,
                next       : options.next,
                delay      : options.delay
            });
                
            // Hide the items to allow them to animate in
            ias.on('render', function(items) {
                $(items).css({ opacity: 0 });
            });
            
            // Pass any callback functions to the newly loaded items
            if (callback) {
                ias.on('rendered', function(items) {
                    if (typeof(callback) == 'object') {
                        callback.forEach(function (func) {
                            func();
                        });
                    } else if (typeof(callback) == 'function') {
                        callback();
                    }
                });
            }
        
            if (options.isotopeGrid) {
                // Append new items to Isotope grid
                ias.on('rendered', function(items) {
                    isotopeGrid.appended(items);
                });
            } else {
                ias.on('rendered', function(items) {
                    // Show the items
                    $(items).css({ opacity: 1 });  
                    // Re-call the iframeHeight plugin
                    $('.auto-resizable-iframe').iframeHeight();
                    // Re-call the lightbox plugin
                    $('[rel="lightbox"]').magnificPopup({
                        type : 'image'
                    });             
                });
            }
            
            // Add a loading spinner image
            if (options.loadSpinner) {
                ias.extension(new IASSpinnerExtension());
            }
            
            // Add some end of scroll text
            if (options.endText) {
                ias.extension(new IASNoneLeftExtension({
                    html: '<div class="ias-noneleft"><p>' + options.endText + '</p></div>'
                }));
            }
            
        }); // this.each
 
    }; // KayenInfiniteScroll()
 
}(jQuery));