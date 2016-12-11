$.fn._inViewport = function(whole){
    // set default option
    whole = whole || false;

    // cache scroll position
    var scrollTop = $(window).scrollTop();

    // if the entire element is in view
    if (whole) {
        // the position of the bottom of the element
        var a = this.offset().top + this.height();
    // if any part of the element is in view
    } else {
        // the position of the top of the element
        var a = this.offset().top;
    }

    // the sum of the element's height and the window height
    var b = scrollTop + $(window).height();

    // ?
    var c = a > scrollTop;

    // is the element in the viewport?
    if (a < b && c) {
        return true;
    } else {
        return false;
    }
}