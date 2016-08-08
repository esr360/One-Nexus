(function ($) {

    /**
     * Kayzen.navDropdown
     * @author @esr360
     */
    $.fn.navDropdown = function(custom) {

        // Options
        var options = $.extend({
            toggleIcon      : _modules['side-nav']['collapsible']['icon'],
            toggleIconClass : 'side-nav_openClose',
            slideTransition : baseTransition,
            megaMenuName    : 'mega-menu'
        }, custom);

        // Run the code on each occurance of the element
        return this.each(function() { 

            var navParent = $(this);

            // Create open/close icon
            var openClose = '<i class="' + options.toggleIconClass + ' fa ' + options.toggleIcon + '"></i>';

            // Add icon to appropriate menu items
            navParent.find('a:not(:only-child)').prepend(openClose);

            // Remove icon from any mega-menu items
            navParent.find(
                'li > [class*="' + options.megaMenuName + '"]'
            ).parent().find(
                '.' + options.toggleIconClass
            ).remove();

            // Hide/show child menus
            navParent.on('click', '.' + options.toggleIconClass, function(e) {
                $(this).parent('a').find('+ ul').slideToggle(options.slideTransition);
                return false;
            });

        }); // this.each
 
    }; // navDropdown()
 
}(jQuery));