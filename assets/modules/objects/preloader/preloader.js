(function ($) {
    
    /**
     * @module: 'preloader'
     * @dependencies: Aloads
     * @author: @esr360
     */
    $.fn.preloader = function(custom) {
        
        // Options
        var options = $.extend({
            closeSelector : '.preloader_close',
            disableButton : true
        }, custom);
            
        var preloader = $(this);
        
        function hidePreloader() {
            preloader.addClass('preloader-loaded');
            setTimeout(function() {
                preloader.hide();
            }, baseTransition);
        }
        
        $(window).bind('load', function() {
            hidePreloader();
        });
        
        if (options.disableButton) {
            $(options.closeSelector).click(function() {
                hidePreloader();
            });
        } else {
            $(options.closeSelector).hide();
        }
 
    }; // preloader()
 
}(jQuery));