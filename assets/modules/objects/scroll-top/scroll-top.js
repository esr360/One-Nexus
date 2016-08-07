(function ($) {
    
    /**
     * 
     * KAYZEN
     * @module: 'scroll-top'
     * @author: @esr360
     * 
     */

    // Because .scrollTop() is already defined by jQuery, we must
    // call our plugin something else, i.e. scrollToTop();
    $.fn.scrollToTop = function(custom) {
        
        // Options
        
        var options = $.extend({
            activePosition : 350,
            activeClass    : 'visible'
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {
            
            var scrollTopIcon = $(this);
            
            $(window).bind("scroll", function() {
                if ($(this).scrollTop() > options.activePosition) {
                    $(scrollTopIcon).addClass(options.activeClass);
                } else {
                    $(scrollTopIcon).stop().removeClass(options.activeClass);
                }
            });
            
        }); // this.each

    }; // scrollToTop()

}(jQuery));