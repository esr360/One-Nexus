(function ($) {
    
    /**
     * @module: 'form'
     * @author: @esr360
     */
    $.fn.form = function(custom) {
        
        // Options
        var options = $.extend({
            inputs      : '[class*="form_input"]',
            placeholder : '~ label'
        }, custom);
            
        // Ensure an input is always focused when its corresponding label is clicked
        $('label').unbind().click(function() {
            var labelID = $(this).attr('for');
            setTimeout(function(){
                $('#' + labelID).get(0).focus();
            }, 1);
        });
        
        // Run the code on each occurance of the element
        return this.each(function() {
            
            var inputs = $(this).find(options.inputs);
            
            inputs.each(function() {
                
                var input = $(this);
                var placeholder = input.find(options.placeholder);
                
                input.blur(function() { 
                    if (this.value == '') {
                        placeholder.fadeIn();
                    } else {
                        placeholder.hide();
                    }
                });
                
                input.focus(function() {
                    placeholder.fadeIn();
                });
            
            });
                
        }); // this.each
 
    }; // form()
 
}(jQuery));