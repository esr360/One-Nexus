/**
 *
 * Kayzen.carouselCustomPager
 * @author @esr360
 * @description Uses "Owl Carousel" plugin
 *
 */

(function ($) {
 
    $.fn.kCarousel = function(custom) {
        
        // Options
        var options = $.extend({
            navId         : '',
            pagerId       : '',
            pagerSelector : 'li',
            owlOptions    : {
                items     : 1,
                loop      : true,
                dots      : false,
                mouseDrag : false
            }
        }, custom);
			
		var navId = options.navId;
		var pagerId = options.pagerId;
		var pagerSelector = options.pagerSelector;
            
        // Run the code on each occurance of the element
        return this.each(function() {
				
            var carouselId = $(this);
            
            function pagerTrigger(pagerId, pagerSelector) {
                $(pagerId).find(pagerSelector).click(function() {
                    var $index = $(this).index();
                    $(this).siblings().removeClass('active').end().addClass('active');
                    $(carouselId).trigger('to.owl.carousel', [$index, 400, true]);
                });
            }
        
            function slideNext(navId, pagerId) {
                $(navId + " .slide-next").click(function() {
                    var $activeItem = $(pagerId).find('.active');
                    if ($activeItem.is(':last-child')) {
                        $activeItem.removeClass('active').siblings(':first').addClass('active');
                    } else {
                        $activeItem.removeClass('active').next().addClass('active');
                    }
                    $(carouselId).trigger('next.owl.carousel');
                });
            } 
        
            function slidePrev(navId, pagerId) {
                $(navId + " .slide-prev").click(function() {
                    var $activeItem = $(pagerId).find('.active');
                    if ($activeItem.is(':first-child')) {
                        $activeItem.removeClass('active').siblings(':last').addClass('active');
                    } else {
                        $activeItem.removeClass('active').prev().addClass('active');
                    }
                    $(carouselId).trigger('prev.owl.carousel');
                });
            } 
                
            carouselId.owlCarousel(options.owlOptions);
            
            pagerTrigger(pagerId, pagerSelector);
            
            slideNext(navId, pagerId);
            
            slidePrev(navId, pagerId);
            
        }); // this.each
 
    }; // KayenInfiniteScroll()
 
}(jQuery));