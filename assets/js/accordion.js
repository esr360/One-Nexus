/******************************************************************
Accordion
******************************************************************/

function accordion() {

	$('.accordion > * > *:first-child').click(function () {

		var $parent = $(this).parent();

		$parent.toggleClass('active');
		$parent.siblings().removeClass('active');
		$parent.siblings().find('> *:first-child ~ *').slideUp(420);
		$(this).find('~ *').slideToggle(420);

	});
  
}

$(accordion);