$.fn._visible = function(whole){
    whole = whole || false;
    var scrollTop = $(window).scrollTop();

    // if the entire element is in view
    if (whole) {
        var a = this.offset().top + this.height();
    // if any part of the element is in view
    } else {
        var a = this.offset().top;
    }

    var b = scrollTop + $(window).height();
    var c = a > scrollTop;

    // is the element in the viewport?
    if (a < b && c) {
        return true;
    } else {
        return false;
    }
}