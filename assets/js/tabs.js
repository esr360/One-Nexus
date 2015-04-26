
/* Tabs
================================================================ */

function tabs() {

	$('.tabs .nav li, [class*="tabs-"] .nav li').click(function() {

		var $section = $(this).parents('.tabs, [class*="tabs-"]').find('> *:not(.nav)');

		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$section.slideUp(420);
		$section.eq($(this).index()).slideDown(420);
		return false;

	});
  
}

$(tabs);