(function ($) {
    
    /**
     *
     * Kayzen.dataBg
     * @author @esr360
     *
     */
 
    $.fn.dataBg = function(custom) {
        
        // Options
        var options = $.extend({
            prependClass : 'bg-img'
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {
            
            var object = $(this);
            
            var bg = object.attr('data-bg');
            
            if (object.is('a') && object.attr('href') == '#') {
                object.attr('href', bg)
            }
            
            object.prepend('<div class="' + options.prependClass + '" style="background-image: url(' + bg + ')"></div>');
                            
        }); // this.each
 
    }; // dataBg()
 
}(jQuery));