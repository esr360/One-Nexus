(function ($) {
    
    /**
     * KAYZEN
     * @module: 'progress-bar'
     * @author: @esr360
     */
    $.fn.progressBar = function(custom) {
        
        // Options
        var options = $.extend({}, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {
            
            var bar = $(this);
            
            var attrProgress = bar.attr('data-progress');
            
            bar.attr('value', attrProgress.replace(/[^-\d\.]/g, ''));
            
            bar.find('.progress').css({ 
                width : attrProgress 
            }); 

        });
 
    }; // progressBar()
 
}(jQuery));