
/* Global Scripts
================================================================ */

$(document).ready(function() {

//-----------------------------------------------------------------
// Smooth Scroll
//-----------------------------------------------------------------

$('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1200);
            return false;
        }
    }
});

//-----------------------------------------------------------------
// Scroll to Top
//-----------------------------------------------------------------

$(window).bind("scroll", function() {
    if ($(this).scrollTop() > 350) {
        $(".scroll-top").addClass('active');
    } else {
        $(".scroll-top").stop().removeClass('active');
    }
});

//-----------------------------------------------------------------
// Modals
//-----------------------------------------------------------------

$("[rel*='modal']").leanModal({ 
    closeButton: ".modal-close" 
});

//-----------------------------------------------------------------
// Progress Bars
//-----------------------------------------------------------------

$(".progress").each(function() {
    attrProgress = $(this).attr('data-progress');
    $(this).css({ width : attrProgress }); 
});

//-----------------------------------------------------------------
// Tooltips
//-----------------------------------------------------------------

$(function() {
    $('a[rel*="tooltip"]').tipsy({
        fade: true, 
        gravity: 's'
    });
});
            
}); // end document.ready