$(document).ready(function(){
	var hamburger = $('.hamburger');
  var navLinks = $('.nav-links');

	$(document).ready(function(){
		// Add smooth scrolling to all links
		$("a").on('click', function(event) {
	
			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();
	
				// Store hash
				var hash = this.hash;
	
				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function(){
	
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				});
			} // End if
		});
	});

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