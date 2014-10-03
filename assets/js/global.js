
/* Global Scripts
================================================================ */

$(document).ready(function() {

/******************************************************************
Mobile Menu
******************************************************************/

$("#app-header .main-nav > ul").clone().appendTo("#off-canvas-nav");

/******************************************************************
Smooth Scroll
******************************************************************/

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

/******************************************************************
Scroll to Top
******************************************************************/

$(window).bind("scroll", function() {
    if ($(this).scrollTop() > 350) {
        $(".scroll-top").addClass('active');
    } else {
        $(".scroll-top").stop().removeClass('active');
    }
});


/******************************************************************
Modals
******************************************************************/

$('.modal-image').magnificPopup({ 
	type: 'image',
});

$('.modal-gallery').magnificPopup({ 
	type: 'image',
	delegate: 'a',
	gallery: {
		enabled: true
	},
});

$('.inline-modal').magnificPopup({
	type:'inline',
	midClick: true,
});

/******************************************************************
Tooltip
******************************************************************/

 $('.tooltip').tipr({
      'speed': 300,
      'mode': 'top'
 });

}); // End document.ready