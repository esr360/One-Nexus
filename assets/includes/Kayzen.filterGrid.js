(function ($) {
    
    /**
     *
     * Kayzen.filterGrid
     * @author @esr360
     *
     */
 
    $.fn.filterGrid = function(custom) {
        
        // Options
        var options = $.extend({
            items      : '#portfolio-items'
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {
            
            var cats  = $(this);
            var items = $(options.items);
            
            cats.KayzenClickHelper();
                
            items.isotope();
            
            cats.on('click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                items.isotope({ 
                    filter: filterValue 
                });
            });
            
            $(window).load(function() {
                setTimeout(function() {
                    items.isotope('layout');  
                }, baseTransition);
            });
            
            $('#toggleHeader').click(function() {
                setTimeout(function() {
                    items.isotope('layout');  
                }, baseTransition);
            });     
                         
        }); // this.each
 
    }; // masonryGrid()
 
}(jQuery));