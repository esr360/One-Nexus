(function ($) {
    
    /**
     * KAYZEN
     * @module: 'app-header'
     * @requires: 'navigation', 'side-nav', 'site-overlay'
     * @author: @esr360
     */
    $.fn.header = function(custom) {
    
        var $module = 'app-header';
        
        // Options
        var options = $.extend({
            navigation   : _navigation,
            overlay      : '#site-overlay',
            sticky       : _option($module, 'sticky'),
            transition   : _baseTransition,
            stickyOffset : null
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {
            
            var header = $(this);
            var navigation = $(options.navigation);
            var navDropdown = navigation.find('> ul > li > a:not(:only-child)').parent();
            
            function stickyHeader() {

                var stickyOffset = options.stickyOffset || header.offset().top;

                function stickHeader() {
                    header.addClass('fixed');
                    if (!stickyOffset == header.offset().top) {
                        header.addClass('visible');
                    }
                    navDropdown.hover(
                        function() { 
                            $(options.overlay).siteOverlay('show', 'navDropdown');
                        },
                        function() { 
                            $(options.overlay).siteOverlay('hide', 'navDropdown');
                        }
                    );
                }

                function unStickHeader() {
                    if (stickyOffset == header.offset().top) {
                        header.removeClass('fixed');
                    } else {
                        // to allow header to fade out before becoming unfixed
                        header.removeClass('visible');
                        setTimeout(function () {
                            header.removeClass('fixed');
                        }, 400);
                    }
                    navDropdown.unbind('mouseenter mouseleave');
                    $(options.overlay).siteOverlay('hide');
                }
    
                $(window).on('load scroll', function(e) {
                    var scroll = $(window).scrollTop();
                    if (scroll > stickyOffset) {
                        stickHeader();
                    } else {
                        unStickHeader();
                    }
                });
            
            }
                
            if (options.sticky)  {
                stickyHeader();
            }

        }); // this.each
 
    }; // header()
 
}(jQuery));