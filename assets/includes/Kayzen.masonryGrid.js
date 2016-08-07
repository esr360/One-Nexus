(function ($) {
    
    /**
     *
     * Kayzen.masonryGrid
     * @author @esr360
     *
     */
 
    $.fn.masonryGrid = function(custom) {
        
        // Options
        var options = $.extend({
            responsive : _modules['grid']['options']['col-break']
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {
                
            var $break = (options.responsive).replace(/[^-\d\.]/g, '');
            var grid = $(this);
          
            $(window).bind("load resize", function() {
                    
                if (($(document).width()) < $break) {
                    grid.masonry('destroy');
                } else {
                    grid.masonry();
                }

            });  
                            
        }); // this.each
 
    }; // masonryGrid()
 
}(jQuery));