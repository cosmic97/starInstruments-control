$(document).ready(function(){
	var hamburger = $('.hamburger');
  var navLinks = $('.nav-links');

	//slick slider
	$('.slideshow .slick').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});

	//hamburger menu to show navigation links on click
	hamburger.click(function() {
		hamburger.toggleClass('active');
		navLinks.toggleClass('active');
		$('body').toggleClass('hide-scroll');
	});
});