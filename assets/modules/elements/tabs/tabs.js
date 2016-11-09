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
            transition  : _baseTransition/2
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {
            
            // Cache the tabs' parent container
            var tabsParent = $(this);
            
            // Get the navigation container
            var tabsNav = $(this).find(options.navParent);
            
            // Get individual navigation item
            var tabsNavItem = tabsNav.find(options.navItem);
            
            // Get individual tabs item
            var tabsItem = tabsParent.find(options.item);
            
            // Add active class to appropriate nav item
            $(tabsNav).KayzenClickHelper({
                targetClass : options.activeClass
            });
            
            // Execute the code when a tab navigation item is clicked 
            tabsNavItem.click(function() {
        
                // Cache the current index of clicked item
                var index = $(this).index();
                
                // Hide previously selected item
                tabsItem.fadeOut(options.transition);
                
                // Show the new item
		        setTimeout(function(){
                    tabsItem.eq(index).fadeIn(options.transition);
                }, options.transition);
                
                return false;
        
            });
            
        });
 
    }; // tabs()
 
}(jQuery));