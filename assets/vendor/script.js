$(document).ready(function(){
	var hamburger = $('.hamburger');
  var navLinks = $('.nav-links');

	//hamburger menu to show navigation links on click
  hamburger.click(function() {
    hamburger.toggleClass('active');
    navLinks.toggleClass('active');
    $('body').toggleClass('hide-scroll');
  });
});