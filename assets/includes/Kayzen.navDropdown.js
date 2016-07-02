(function ($) {
    
    /**
     *
     * Kayzen.navDropdown
     * @author @esr360
     *
     */
 
    $.fn.navDropdown = function(custom) {
        
        // Options
        var options = $.extend({
            toggleIcon      : _modules['side-nav']['collapsible']['icon'],
            slideTransition : baseTransition
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() { 
            
            var navParent = $(this);
                        
            // Create open/close icon
            var openClose = '<i class="side-nav_openClose fa ' + options.toggleIcon + '"></i>';
            
            // Add icon to appropriate menu items
            navParent.find('a:not(:only-child)').prepend(openClose);
        
            // Remove icon from any mega-menu items
            navParent.find('li > [class*="mega-menu"]').parent().find('.side-nav_openClose').remove();
                
            // Hide/show child menus
            navParent.on('click', '.side-nav_openClose', function(e) {
                $(this).parent('a').find('+ ul').slideToggle(options.slideTransition);
                return false;
            });
                         
        }); // this.each
 
    }; // navDropdown()
 
}(jQuery));