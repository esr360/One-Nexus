(function ($) {
    
    /**
     * Kayzen.clckHelper
     * @author @esr360
     * @description Add class to element & remove from siblings
     */
    $.fn.KayzenClickHelper = function(custom) {
        
        // Options
        var options = $.extend({
            targetClass : 'active'
        }, custom);
            
        // Run the code on each occurance of the element
        return this.each(function() {
            
            // Execute the code when any child is clicked
            $(this).children().click(function() {
                
                // Remove the class from each sibling
                $(this).siblings().removeClass(options.targetClass);
                
                // Add the class to the new item
                $(this).addClass(options.targetClass);
                
            });
            
        }); // this.each
 
    }; // KayenInfiniteScroll()
 
}(jQuery));