/**
 * 
 * KAYZEN
 * @module: 'search-box'
 * @author: @esr360
 * 
(function ($) {

    $.fn.searchBox = function(custom) {
        
        // Options
        var options = $.extend({
            
            container    : _searchBox,
            input        : '[type="search"]',
            closeTrigger : '.search-box_close',
            visibleClass : 'search-box-visible'
            
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {
            
            $(this).click(function() {
                $(options.container).addClass(options.visibleClass);
                setTimeout(function () {
                    $(options.container).find(options.input).focus();
                }, 400);
            });
                        
            $(options.closeTrigger).click(function() {
                $(options.container).removeClass(options.visibleClass);
            });
            
        }); // this.each

    }; // searchBox()

}(jQuery));
 */