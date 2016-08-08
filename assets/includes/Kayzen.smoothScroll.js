(function ($) {
    
    /**
     * Kayzen.smoothScroll
     * @author @esr360
     */
    $.fn.smoothScroll = function(custom) {
        
        // Options
        var options = $.extend({
            offsetTop    : 80,
            animateSpeed : 1200  
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {
            
            var selector = $(this);
            
            selector.click(function() {
                
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
                    
                    var target = $(this.hash);
                    
                    target = target.length ? target : $('[name="' + this.hash.slice(1) +'"]');
                    
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - options.offsetTop
                        }, options.animateSpeed);
                        return false;
                    }
                    
                }
                
            });
                        
        }); // this.each
 
    }; // smoothScroll()
 
}(jQuery));