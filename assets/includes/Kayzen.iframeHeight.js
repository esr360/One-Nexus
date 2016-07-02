(function ($) {
    
    /**
     *
     * Kayzen.iframeHeight
     * @author @esr360
     *
     */
 
    $.fn.iframeHeight = function(custom) {
        
        // Options
        var options = $.extend({
            dataAttr : 'data-iframe-height'
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {
                
            var height = $(this).attr(options.dataAttr);
            
            $(this).find('> div').css({
                paddingBottom : height
            })
                            
        }); // this.each
 
    }; // iframeHeight()
 
}(jQuery));