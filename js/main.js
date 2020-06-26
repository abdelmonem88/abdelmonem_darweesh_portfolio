$(document).ready(function() {
	//Sticky navbar
	$(window).scroll(function() {
		if ($(this).scrollTop() > 0) {
			$('.navbar').addClass('sticky');
		} else {
			$('.navbar').removeClass('sticky');
		}
	});
	//Typed.js
	var typed = new Typed('.typed', {
		strings: ['These are the default values...', 'My name is Abdelmoneem', 'a front-end Developer'],
		typeSpeed: 80,
		backSpeed: 80,
		startDelay: 0,
		backDelay: 800,
		loop: true
	});

	//Count to
	$(window).scroll(function() {
		if ($(this).scrollTop() <= $('#skills').offset().top - 450) {
			$('.timer').countTo({
				speed: 2000,
				onComplete: function(value) {
					console.debug(this);
				}
			});
		}
	});

	//mixit up
	$(document).ready(function() {
		var mixer = mixitup('.mixitup', {
			animation: {
				effects: 'fade translateZ(100%)',
				easing: 'ease-in-out',
				duration: 500
			}
		});
	});
	//add active class to selected btn
	$('#portfolio button').click(function() {
		$('#portfolio button').removeClass('active');
		$(this).addClass('active');
	});
});
