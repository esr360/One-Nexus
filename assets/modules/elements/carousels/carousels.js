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
     *         owl: {
     *             items: 1 
     *         }
     *     });
     */
    $.fn.carousel = function(custom) {

        // Options
        var options = $.extend({
            nav: true,
            pagination: true,
            owl: {},
            options:{
                nav : _modules['carousel']['nav-buttons']['enabled'],
                dots: _modules['carousel']['bullets']['enabled'],
                navText:[
                    '<div class="carousel_nav_item-prev"></div>',
                    '<div class="carousel_nav_item-next"></div>',
                ]
            }
        }, custom);

        var navTemplate = '<div class="carousel_nav"></div>';
        var paginationTemplate = '<div class="carousel_bullets"></div>';

        // Run the code on each occurance of the target
        return this.each(function(index) {
            // Cache the carousel wrapper and slides
            var $carousel = $(this);
            var slides = $carousel.children();

            // If the element doesn't have an id, add one
            if (!this.id) {
                this.id = 'carousel_' + Math.random().toString(36).substr(2, 8)
            }

            // Cache the element's id
            var id = this.id;

            // Merge some new config given the elements id
            $.extend(true, options, {
                options:{
                    navContainer : '#' + id + ' .carousel_nav',
                    dotsContainer: '#' + id + ' .carousel_bullets'
                }
            });

            // Merge any custom owl options
            $.extend(true, options.options, options.owl);

            // Prepare the slides
            slides.addClass('carousel_slide');
            slides.wrapAll('<div class="carousel_slides"></div>');

            // Append the carousel nav
            if (options.nav) {
                $carousel.append(navTemplate);
            }

            // Append the carousel pagination
            if (options.pagination) {
                $carousel.append(paginationTemplate);
            }

            // Cache the slides wrapper
            var slidesWrapper = $carousel.find('.carousel_slides');

            // Initiate the carousel using Owl-Carousel
            slidesWrapper.addClass('owl-carousel');
            slidesWrapper.owlCarousel(options.options);
        });

    }; // carousel()

}(jQuery));