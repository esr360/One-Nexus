(function ($) {
    
    /**
     * 
     * KAYZEN
     * @module: 'tooltip'
     * @author: @esr360
     * 
     */

    $.fn.tooltip = function(custom) {
        
        // Options
        var options = $.extend({
            position : 'top'
        }, custom);
        
        return this.each(function() {
            
            var $content = $(this).attr('data-tooltip');			
            var $position = options.position;
            
            $(this).attr('ontouchstart', '');
            
            $(this).append(
                $('<div class="tooltip_wrapper-' + $position + '"><div class="tooltip_content">' + $content + '</div></div>')
            );
            
        });
            
    } // tooltip

}(jQuery));