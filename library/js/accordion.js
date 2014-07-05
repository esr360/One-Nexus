/******************************************************************
Accordions
******************************************************************/

$(document).ready(function() {

	$('.accordion section *:first-child').click(function () {
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active');
		$(this).find('~ article').slideToggle(420);
		$(this).parent().siblings().find('article').slideUp(420);
	});

});