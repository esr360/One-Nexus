(function ($) {
    
    /**
     * KAYZEN
     * Kayzen.scrollSpy
     * @author: @esr360
     */
    $.fn.scrollSpy = function(custom) {
        
        // Options  
        var options = $.extend({
            itemSelector : 'li'
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {
            
            // Cache the parent container
            var $parent = $(this);
            
            // Cache lastId
            var lastId;
            
            // Get the height of the parent container
            var parentHeight = $($parent).outerHeight() + 15;
            
            // Get all items
            var items = $($parent).find(options.itemSelector);
                
            // Anchors corresponding to menu items
            var scrollItems = items.map(function() {
                if ($(this).prop('tagName') == 'A') {
                    var item = $($(this).attr('href'));
                } else {
                    var item = $($(this).find('a').attr('href'));
                }
                if (item.length) { 
                    return item; 
                }
            });
        
            // Bind to scroll
            $(window).scroll(function() {
                
                // Get container scroll position
                var fromTop = $(this).scrollTop() + parentHeight;
                
                // Get id of current scroll item
                var current = scrollItems.map(function() {
                    if ($(this).offset().top < fromTop) {
                        return this;
                    }
                });
                
                // Get the id of the current element
                current = current[current.length-1];
                
                var id = current && current.length ? current[0].id : '';
                
                if (lastId !== id) {
                    
                    lastId = id;
                    
                    // Add active class to appropriate item
                    if ($(options.itemSelector).prop('tagName') == 'A') {
                        items.removeClass('active').filter('[href=#'+id+']').addClass('active');
                    } else {
                        items.find('a').removeClass('active');
                        items.find('a[href=#'+id+']').addClass('active');
                    }
                    
                }   
                                
            });
                
        }); // this.each
 
    }; // scrollSpy()
 
}(jQuery));