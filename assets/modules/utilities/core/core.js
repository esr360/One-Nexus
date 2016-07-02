/**
 *
 * Tools
 * @description general JS tools, helpers and plugin inits
 *
 */

// Create a global variable for base transition duration
window['baseTransition'] = _modules['base']['transition'].slice(0,-1) * 1000;

// Get breakpoint value
function breakpoint(media, value) {
    if (value.indexOf('break') == 0) {
        return window.matchMedia('(' + media + ':' + _modules['grid']['breakpoints'][value] + ')').matches;
    } else {
        return window.matchMedia('(' + media + ':' + value + ')').matches;
    }
}

$(document).ready(function() {

    // Set Iframe Height
    $('.auto-resizable-iframe').iframeHeight();

    // Animated Numbers
    $('[id^="stat-"]').scrollStats();

    // Masonry Grid
    $('.js-masonry').masonryGrid();

    // Data Background Images
    $('[data-bg]').dataBg();

    // Parallax Init
    if (breakpoint('min-width', 'break-4')) {
        $.stellar({
            horizontalScrolling : false
        });
    }

    // Owl Carousel Init
    $('.carousel').each(function() {
        $(this).addClass('owl-carousel');
        $(this).owlCarousel();
    });

    // Magnific Popup Init
    $('[rel="lightbox"]').magnificPopup({
        type : 'image'
    });

    // Magnific Popup Init
    $('.lightbox-gallery').each(function() {
        $(this).magnificPopup({
            delegate : 'a',
            type : 'image',
            gallery: {
                enabled : true
            }
        });
    });

}); // document.ready