(function ($) {
    
    /**
     * KAYZEN
     * @module: 'flyout-nav'
     * @dependencies: 'side-nav' (, 'site-overlay')
     * @author: @esr360
     */
    $.fn.flyoutNav = function(custom) {
        
        var $module = 'flyout-nav';
        
        // Options
        var options = $.extend({
            trigger        : '#' + $module + '-trigger',
            overlay        : '#site-overlay',
            sideNavClass   : 'side-nav',
            navOpenDefault : _modules[$module]['collapsible']['open-by-default']
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {
            
            var flyoutContainer = $(this)
                .clone()
                .prependTo('body')
                .removeAttr('id')
                .removeAttr('class')
                .wrap('<div class="' + $module + ' ' + options.sideNavClass + '"></div>');
                
            flyoutContainer = flyoutContainer.parent();
            
            // remove any responsive helper classes
            flyoutContainer.find('ul').removeClass(function(index, css) {
                return (css.match (/(^|\s)min-break-\S+/g) || []).join(' ');
            });
            
            // remove the trigger icon
            flyoutContainer.find(options.trigger).parents('ul').remove();
                
            // Add collapsible functionality
            if (_option($module, 'collapsible')) {
                flyoutContainer.navDropdown();
            } else {
                $(_flyoutNav).find('.' + options.sideNavClass + '_openClose').remove();
            }
            
            if (!options.navOpenDefault) {
                $(_flyoutNav).find('a:not(:only-child) ~ ul').hide();
            }
            
            // Open the flyout nav
            function openFlyoutNav() {
                flyoutContainer.addClass($module + '-visible');
                $(options.trigger).addClass('active');
            }
            
            // Close the flyout nav
            function closeFlyoutNav() {
                flyoutContainer.removeClass($module + '-visible');
                $(options.trigger).removeClass('active');
            }
            
            // Toggle the flyout nav on trigger click
            $('body').on('click', options.trigger, function () {
                if (flyoutContainer.hasClass($module + '-active')) {
                    closeFlyoutNav();
                    $(options.overlay).siteOverlay('hide', 'flyout');
                } else {
                    openFlyoutNav();
                    $(options.overlay).siteOverlay('show', 'flyout', {
                        selfClose : true
                    });
                }
            });
            
            // Close the flyout nav when the overlay is clicked
            $(options.overlay).click(closeFlyoutNav);
            
        }); // this.each
 
    }; // flyoutNav() 
    
}(jQuery));