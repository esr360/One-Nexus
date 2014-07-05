
/* Global Scripts
================================================================ */

$(document).ready(function() {

/******************************************************************
Parallax
******************************************************************/

//http://code.tutsplus.com/tutorials/simple-parallax-scrolling-technique--net-27641#comment-789162092

$(document).ready(function(){

    var $window = $(window);

    $('[data-type="parallax"]').each(function(){
        var $bgobj = $(this); // assigning the object
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            // Put together our final background position
            var coords = '50%' + yPos + 'px';
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        });
    });

});

/******************************************************************
Mobile Menu
******************************************************************/

$(".menu-trigger").click(function(e){
	$('.main-nav > ul').slideToggle(600);
	$(this).toggleClass('active');		
    e.preventDefault();
});

if($(window).width() <= 940) {
	$(".main-nav ul li a:not(:only-child)").click(function(e) {
	    var $this = $(this);
	    if (e.pageX - $this.offset().left > $this.width() / 1.25) {
	        // Clicked on the right side.
			$(this).toggleClass('active');
			$(this).parent().toggleClass('open');
			$(this).find('~ ul').slideToggle(600);
		    e.preventDefault();
	    } else {
	        // Clicked on the left side.
	    }
	});
} 

// Removes menu inline styles on browser resize
$(window).resize(function(){
	$('.main-nav *').removeAttr('style');
	$('.menu-trigger').removeClass('active');
});

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
Fancybox
******************************************************************/

$('a.fancybox').fancybox({
	openEffect: 'fade',
	prevEffect: 'fade',
	nextEffect: 'fade',
	padding: 10,
	helpers: {
		overlay: {
			locked: false
		}
	}
});

$('a.fancybox').click(function(e) {	
    e.preventDefault();
});

/******************************************************************
Tooltip
******************************************************************/

 $('.tooltip').tipr({
      'speed': 300,
      'mode': 'top'
 });

/******************************************************************
Add Actice Class
******************************************************************/

if($(window).width() >= 940) { // Apply effect to desktops only

	tiles = $(".add-active");

	$(window).scroll(function(d,h) {
	    tiles.each(function(i) {
	        a = $(this).offset().top + $(this).height();
	        b = $(window).scrollTop() + $(window).height();
	        if (a < b) $(this).addClass('active');
	    });
	});
	
}

/******************************************************************
Sticky Navigation
******************************************************************/

if($(window).width() >= 940) { // Apply effect to desktops only
	$(window).scroll(function() {
	 
		var scrollYpos = $(document).scrollTop();
		 
		if (scrollYpos > 310 ) {	 
			$('#sidebar1').addClass('active');
		 
		} else { 
			$('#sidebar1').removeClass('active');
		}

	});

	var img = $("#sidebar1");
	$("#sidebar1").css({width:img.width()});
}

/******************************************************************
Sticky Page List
******************************************************************/

if($(window).width() >= 1600) { // Apply effect to large desktops only
	$(window).scroll(function() {
	 
		var scrollYpos = $(document).scrollTop();
		 
		if (scrollYpos > 575 ) {	 
			$('.page-list').addClass('active');
			$('.this-page').addClass('active');
		 
		} else { 
			$('.page-list').removeClass('active');
			$('.this-page').removeClass('active');
		}

	});
}

/******************************************************************
Scroll Spy
******************************************************************/

// http://jsfiddle.net/mekwall/up4nu/

// Cache selectors
var lastId,
    topMenu = $(".page-list"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});

/******************************************************************
Misc
******************************************************************/

// Refresh page
$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 100);
});

/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
	var doc = w.document;
	if( !doc.querySelector ){ return; }
	var meta = doc.querySelector( "meta[name=viewport]" ),
		initialContent = meta && meta.getAttribute( "content" ),
		disabledZoom = initialContent + ",maximum-scale=1",
		enabledZoom = initialContent + ",maximum-scale=10",
		enabled = true,
		x, y, z, aig;
	if( !meta ){ return; }
	function restoreZoom(){
		meta.setAttribute( "content", enabledZoom );
		enabled = true; }
	function disableZoom(){
		meta.setAttribute( "content", disabledZoom );
		enabled = false; }
	function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
		// If portrait orientation and in one of the danger zones
		if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){ disableZoom(); } }
		else if( !enabled ){ restoreZoom(); } }
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );
})( this );


/* IE8 ployfill for GetComputed Style (for Responsive Script below) */
if (!window.getComputedStyle) {
	window.getComputedStyle = function(el, pseudo) {
		this.el = el;
		this.getPropertyValue = function(prop) {
			var re = /(\-([a-z]){1})/g;
			if (prop == 'float') prop = 'styleFloat';
			if (re.test(prop)) {
				prop = prop.replace(re, function () {
					return arguments[2].toUpperCase();
				});
			}
			return el.currentStyle[prop] ? el.currentStyle[prop] : null;
		}
		return this;
	}
}

/******************************************************************
Responsive jQuery
******************************************************************/
	
/* getting viewport width */
var responsive_viewport = $(window).width();

if (responsive_viewport < 481) {
}

if (responsive_viewport > 481) {
}

if (responsive_viewport >= 768) {

	/* load gravatars */
	$('.comment img[data-gravatar]').each(function(){
		$(this).attr('src',$(this).attr('data-gravatar'));
	});
	
}

if (responsive_viewport > 1030) {
}

}); // End document.ready