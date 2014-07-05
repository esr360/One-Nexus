/******************************************************************
Tabs
******************************************************************/

$('.tabs .nav li').click(function() {
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	$(this).parents('.tabs').find('section').slideUp('slow');
	$(this).parents('.tabs').find('section').eq($(this).index()).slideDown('slow');
	return false;
});