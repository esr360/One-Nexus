(function ($) {
 
    /**
     * KAYZEN
     * @module: 'tabs'
     * @author: @esr360
     */
    $.fn.tabs = function(custom) {
        
        // Options
        var options = $.extend({
            navParent   : '[class*="tabs_nav"]',
            navItem     : 'li',
            item        : '[class*="tabs_item"]',
            activeClass : 'active',
            transition  : 400/2
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {
            
            // Cache the tabs' parent container
            var tabsParent = $(this);
            
            // Get the navigation container
            var tabsNav = $(this).find(options.navParent).first();
            
            // Get individual navigation items
            var tabsNavItem = tabsNav.find(options.navItem);
            
            // Get individual tabs items
            var tabItems = function() {
                // get depth of target tab items as tabs may be nested
                var itemDepth = tabsParent.find(options.item).first().parents().length;
                // get all items of same depth
                return tabsParent.find(options.item).filter(function() {
                    return $(this).parents().length === itemDepth;
                });
            }

            // Add active class to appropriate nav item
            $(tabsNav).KayzenClickHelper({
                targetClass : options.activeClass
            });
            
            // Execute the code when a tab navigation item is clicked 
            tabsNavItem.click(function() {
        
                // Cache the current index of clicked item
                var index = $(this).index();
                
                // Hide previously selected item
                tabItems().fadeOut(options.transition);
                tabsNavItem.removeClass(options.activeClass);
                
                // Show the new item
                tabsNavItem.eq(index).addClass(options.activeClass);
		        setTimeout(function(){
                    tabItems().eq(index).fadeIn(options.transition);
                }, options.transition);
                
                return false;
        
            });
            
        });
 
    }; // tabs()
 
}(jQuery));