(function ($) {
    
    /**
     *
     * Kayzen.equalHeight
     * @author @esr360
     *
     */
 
    $.fn.equalHeight = function(custom) {
        
        // Options
        var options = $.extend({
            child : '> *'
        }, custom);
                
        // Run the code on each occurance of the element
        return this.each(function() {
                
            var parent = $(this);
            var child = parent.find(options.child);
            
            // Get an array of all element heights
            var elementHeights = $(child).map(function() {
                return $(this).outerHeight();
            }).get();

            // Math.max takes a variable number of arguments
            // `apply` is equivalent to passing each height as an argument
            var maxHeight = Math.max.apply(null, elementHeights);

            // Set each height to the max height
            $(window).load(function() {
                $(child).outerHeight(maxHeight);
            });
                            
        }); // this.each  
 
    }; // equalHeight()
 
}(jQuery));