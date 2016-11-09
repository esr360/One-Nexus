(function ($) {
    
    /**
     * KAYZEN
     * @module: 'footer'
     * @dependencies: 'twitter-feed', OwlCarousel
     * @author: @esr360
     */
    $.fn.footer = function(custom) {
        
        // Options
        var options = $.extend({
            twitterFeedSelector : '#footer-twitter-feed',
            twitterFeed : {
                username  : 'esr360',
                tweets    : 8,
                container : '.twitter-feed_content'
            },
            testimonialsSelector : '#footer-testimonials'
        }, custom);
        
        // Footer Testimonials
        function testimonials() {
            
            var footerTestimonials = $(options.testimonialsSelector);
            
            footerTestimonials.owlCarousel({
                items: 1,
                dots: false,
                loop: true,
                margin: 20
            });
                
            $('.footer_testimonials-nav .tweet-prev').click(function() {
                footerTestimonials.trigger('prev.owl.carousel');
            });
            
            $('.footer_testimonials-nav .tweet-next').click(function() {
                footerTestimonials.trigger('next.owl.carousel');
            });
                        
            function delayCarousel(carousel, delay) { 
                setTimeout(function() {
                    carousel.owlCarousel('invalidate', 'all').owlCarousel('refresh');
                }, delay); 
            }
            
            $(window).load(function() {
                delayCarousel(footerTestimonials, _baseTransition)
            });
            
            $('#toggleHeader').click(function() {
                delayCarousel(footerTestimonials, _baseTransition)
            });
            
        } // testimonials()
        
        // Run the code on each occurance of the element
        return this.each(function() {
            
            $(options.twitterFeedSelector).twitterFeed(
                options.twitterFeed
            );
            
            testimonials();
            
        }); // this.each
 
    }; // footer()
 
}(jQuery));