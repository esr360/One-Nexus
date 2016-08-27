(function ($) {
    
    /**
     * KAYZEN
     * @module: 'site-overlay'
     * @author: @esr360
     */
    $.fn.siteOverlay = function(state, flag, custom) {
        
        // Options
        var options = $.extend({
            selfClose : true
        }, custom);
        
        var overlay = $(this);
        
        flag = (flag) ? flag + '-' : '';
        
        function showOverlay() {
            overlay.addClass('site-overlay-' + flag + 'visible');
        }
        
        function hideOverlay() {
            overlay.removeClass('site-overlay-' + flag + 'visible');
        }
        
        if (state == 'show') {
            showOverlay();
        } else if (state == 'hide') {
            hideOverlay()
        } else {
            if (overlay.is('[class*="-visible"]')) {
                hideOverlay()
            } else {
                showOverlay();
            }
        }
        
        // Hide the overlay when clicked
        if (options.selfClose) {
            overlay.click(hideOverlay);
        }

    }; // siteOverlay
 
}(jQuery));