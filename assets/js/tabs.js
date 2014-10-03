/******************************************************************
Tabs
******************************************************************/

function tabs() {

	$('.tabs .nav li').click(function() {

		var $section = $(this).parents('.tabs').find('section');

		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$section.slideUp(420);
		$section.eq($(this).index()).slideDown(420);
		return false;

	});
  
}

$(tabs);