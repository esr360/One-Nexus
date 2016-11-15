/**
 * Tools
 * @description general JS tools, helpers and plugin inits
 */

// Create a global variable for base transition duration
window['_baseTransition'] = _modules['base']['transition'].slice(0,-1) * 1000;

// Get breakpoint value
function _breakpoint(media, value) {
    if (value.indexOf('break') == 0) {
        return window.matchMedia('(' + media + ':' + _modules['grid']['breakpoints'][value] + ')').matches;
    } else {
        return window.matchMedia('(' + media + ':' + value + ')').matches;
    }
}

// Return a modifier
function _modifier(modifier, glue) {
    glue = glue || '-';
    return '[class*="' + glue + modifier + '"]';
}

$(document).ready(function() {

    // Owl Carousel Init
    $('.carousel').each(function() {
        $(this).addClass('owl-carousel');
        $(this).owlCarousel();
    });

}); // document.ready