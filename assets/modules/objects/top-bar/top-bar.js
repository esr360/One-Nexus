(function ($) {
    
    /**
     * 
     * KAYZEN
     * @module: 'top-bar'
     * @requires: 'site-overlay'
     * @author: @esr360
     * 
     */
 
    $.fn.topBar = function(custom) {
        
        // Options
        var options = $.extend({
            overlay : $('#site-overlay')
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {
            
            var topBar = $(this);
            var topBarDropdown = $('[class*="top-bar_nav"]').find("> ul > li > a:not(:only-child)").parent();

            $(window).on('load scroll', function(e) {
                
                var scroll = $(window).scrollTop();
                var topBarHeight = topBar.height();
                    
                if (scroll > topBarHeight) {
                    topBarDropdown.hover(
                        function() { 
                            options.overlay.siteOverlay('show', 'topBar');
                        },
                        function() { 
                            options.overlay.siteOverlay('hide', 'topBar');
                        }
                    );
                } else {
                    topBarDropdown.unbind('mouseenter mouseleave');
                    options.overlay.siteOverlay('hide', 'topBar');
                }
                
            });

        }); // this.each
 
    }; // topBar()
 
}(jQuery));