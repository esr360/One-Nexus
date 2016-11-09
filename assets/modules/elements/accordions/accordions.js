(function ($) {

    /**
     * Accordions
     * 
     * @access public
     * @author [@esr360](http://twitter.com/esr360)
     * @param {object} custom - where custom config will be passed
     * 
     * @example
     *     $('.accordion').accordion({
     *         activeClass: 'toggled',
     *         animationSpeed: 0.5s
     *     });
     */
    $.fn.accordion = function(custom) {
        
        // Options
        var options = $.extend({
            activeClass      : 'active',
            animationSpeed   : _baseTransition,
            keepOpenSelector : _modifier('keep-open')
        }, custom);
        
        // Run the code on each occurance of the target
        return this.each(function() {
            
            // Add active class to the target content section
            $(this).find('> *.' + options.activeClass + ' > *:first-child + *').addClass(options.activeClass);

            // When an accordion title is clicked
            $(this).find('> * > *:first-child').click(function () {

                var $parent = $(this).parent();

                if ($(this).parents().eq(1).is(':not(' + options.keepOpenSelector + ')')) {
                    $parent.siblings().removeClass(options.activeClass);
                    $parent.siblings().find('> *:first-child + *').slideUp(options.animationSpeed);
                }
                
                $parent.toggleClass(options.activeClass);
                $(this).find('~ *').slideToggle(options.animationSpeed);

            });
            
        });

    }; // accordion()

}(jQuery));