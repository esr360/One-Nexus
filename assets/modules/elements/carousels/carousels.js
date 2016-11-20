(function ($) {

    /**
     * Carousel
     * 
     * @access public
     * @author [@esr360](http://twitter.com/esr360)
     * @requires owlCarousel
     * @param {object} custom - where custom config will be passed
     * 
     * @example
     *     $('.carousel').carousel({
     *         pagination: false,
     *         options: {
     *             items: 1 
     *         }
     *     });
     */
    $.fn.carousel = function(custom) {
        
        // Options
        var options = $.extend({
            nav: true,
            pagination: true,
            options:{
                nav : true,
                dots: true,
                navContainer : '.carousel_nav',
                dotsContainer: '.carousel_pagination',
                navText:[
                    '<div class="carousel_nav_item-prev"></div>',
                    '<div class="carousel_nav_item-next"></div>',
                ]
            }
        }, custom);

        var navTemplate = '<div class="carousel_nav"></div>';
        var paginationTemplate = '<div class="carousel_pagination"></div>';

        // Run the code on each occurance of the target
        return this.each(function() {
            // Cache the carousel wrapper and slides
            var carousel = $(this);
            var slides = carousel.children();

            // Prepare the slides
            slides.addClass('carousel_slide');
            slides.wrapAll('<div class="carousel_slides"></div>');

            // Append the carousel nav
            if (options.nav) {
                carousel.append(navTemplate);
            }

            // Append the carousel pagination
            if (options.pagination) {
                carousel.append(paginationTemplate);
            }

            // Cache the slides wrapper
            var slidesWrapper = carousel.find('.carousel_slides');

            // Initiate the carousel using Owl-Carousel
            slidesWrapper.addClass('owl-carousel');
            slidesWrapper.owlCarousel(options.options);
        });

    }; // carousel()

}(jQuery));