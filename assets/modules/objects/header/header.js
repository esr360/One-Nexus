(function ($) {
    
    /**
     * 
     * KAYZEN
     * @module: 'app-header'
     * @requires: 'navigation', 'side-nav', 'site-overlay'
     * @author: @esr360
     * 
     */
    
    var $module = 'app-header';
 
    $.fn.header = function(custom) {
        
        // Options
        var options = $.extend({
            navigation      : _navigation,
            overlay         : '#site-overlay',
            sticky          : _option($module, 'sticky'),
            side            : _option($module, 'side'),
            toggleIcon      : _modules['side-nav']['collapsible']['icon'],
            toggleHeader    : '#toggleHeader',
            sideNavClass    : 'side-nav',
            sideVisibleAt   : _modules[$module]['side']['visible-at'],
            collapsible     : _option('side-nav', 'collapsible'),
            navOpenDefault  : _modules['side-nav']['collapsible']['open-by-default'],
            nonSideModifier : 'absolute-opaque'
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {
            
            var header = $(this);
            var navigation = $(options.navigation);
            var navDropdown = navigation.find('> ul > li > a:not(:only-child)').parent();
            
            function stickyHeader() {
                        
                var stickyOffset = header.offset().top;
                
                function stickHeader() {
                    header.addClass('fixed');
                    navDropdown.hover(
                        function(){ 
                            $(options.overlay).siteOverlay('show', 'navDropdown');
                        },
                        function(){ 
                            $(options.overlay).siteOverlay('hide', 'navDropdown');
                        }
                    );
                }
    
                function unStickHeader() {
                    header.removeClass('fixed');
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
            
            function sideHeader() {
                
                // if the header is not correctly located in the DOM, make it so
                if (!$('body > [class*="' + $module + '"]').length) {
                    header.prependTo('body');
                }
                
                // Add collapsible functionality
                if (options.collapsible) {
                    navigation.navDropdown({
                        toggleIcon : options.toggleIcon
                    });
                } else {
                    navigation.find('.' + options.sideNavClass + '_openClose').remove();
                }

                // collapse by default
                if (!options.navOpenDefault) {
                    navigation.find('a:not(:only-child) ~ ul').hide();
                }
                
                // toggle side header
                $(options.toggleHeader).click(function(e) {
                    $('body').toggleClass('hide-sideHeader');
                    // reload any scripts
                    setTimeout(function() {
                        // reload owl-carousels
                        $('.owl-carousel').each(function() {
                           $(this).owlCarousel('invalidate', 'all').owlCarousel('refresh'); 
                        });
                        // reload isotope grids
                        $('.isotope-container').each(function() {
                            $(this).isotope();   
                        });
                        // reload google map
                        if ('google' in window) {
                            google.maps.event.trigger($('#google-map')[0], 'resize');
                        }
                    }, baseTransition); 
                    e.preventDefault();
                });
                
                // handle responsineness
                var navClasses = navigation.attr('class');
                $(window).bind('load resize', function() {
                    if (breakpoint('min-width', options.sideVisibleAt)) {
                        header.removeClass($module + '-' + options.nonSideModifier + '-js').addClass(options.sideNavClass);
                        navigation.removeAttr('class');
                        // if the header is not correctly located in the DOM, make it so
                        if (!$('body > [class*="' + $module + '"]').length) {
                            header.prependTo('body');
                        }
                    } else {
                        header.removeClass(options.sideNavClass);
                        navigation.addClass(navClasses);
                        // relocate to below top-bar if top-bar exists
                        if(_topBar.length) {
                            header.insertAfter(_topBar).addClass($module + '-' + options.nonSideModifier + '-js');
                        }
                    }
                });
                
            }
                
            if (options.sticky)  {
                stickyHeader();
            }
                
            if (options.side) {	
                sideHeader();
            }

        }); // this.each
 
    }; // header()
 
}(jQuery));