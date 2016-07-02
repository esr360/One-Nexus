(function ($) {
    
    /**
     *
     * Kayzen.scrollStats
     * @author @esr360
     *
     */
 
    $.fn.scrollStats = function(custom) {
        
        // Options
        var options = $.extend({
            dataAttr : 'data-val'
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {
                    
            var object = $(this);

            $(window).on("load scroll", function(d,h) {
                
                a = object.offset().top + object.height();
                b = $(window).scrollTop() + $(window).height();
                
                var statSep = $.animateNumber.numberStepFactories.separator(',');
                var attrStat = object.attr(options.dataAttr);
                
                if (a < b) {
                    object.animateNumber({ 
                        number : attrStat,
                        numberStep : statSep
                    }, 2000);
                }
                
            }); 
                            
        }); // this.each
 
    }; // scrollstats()
 
}(jQuery));