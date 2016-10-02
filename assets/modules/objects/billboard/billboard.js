(function ($) {
 
    /**
     * KAYZEN
     * @module: 'billboard'
     * @author: @esr360
     */
    $.fn.billboard = function(custom) {
        
        // Options
        var options = $.extend({
            carousel: {
                selector: '.billboard_carousel',
                next: '.slide-next',
                prev: '.slide-prev',
                options: {
                    items : 1,
                    dots : false,
                    navigation : false,
                    loop: true,
                    stagePadding : 0
                }
            }
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {
            
            var billboard = $(this);
            
            // Carousel
            
            var slideNext = billboard.find(options.carousel.next);
            var slidePrev = billboard.find(options.carousel.prev);
            var billboardCarousel = billboard.find(options.carousel.selector);
            var initialBg = billboard.css('background-image');
            
            billboardCarousel.owlCarousel(options.carousel.options);
            
            billboardCarousel.on('changed.owl.carousel', function(event) {
                var currentItem = $(event.target).find('.owl-item').eq(event.item.index);
                var bg = currentItem.find('.billboard_wrapper').data('billboard-bg');
                if (bg) {
                    billboard.css('background-image', 'url(' + bg + ')');
                } else {
                    billboard.css('background-image', initialBg)
                }
            });
            
            slideNext.click(function() {
                billboardCarousel.trigger('next.owl.carousel');
            });
            
            slidePrev.click(function() {
                billboardCarousel.trigger('prev.owl.carousel');
            });
            
        }); // this.each
 
    }; // billboard()
 
}(jQuery));