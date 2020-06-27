$(document).ready(function() {
	//prelouder
	$('.prelouder-wrapper').delay(2000).fadeOut(500);

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
		strings: ['My name is Abdelmoneem', "i'm a front-end Developer"],
		typeSpeed: 60,
		backSpeed: 60,
		startDelay: 2500,
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
	//add active class to selected portfo;io btn
	$('#portfolio button').click(function() {
		$('#portfolio button').removeClass('active');
		$(this).addClass('active');
	});

	//totop icon
	$('.totop').click(function(e) {
		e.preventDefault();
		$('html, body').animate(
			{
				scrollTop: 0
			},
			2000
		);
	});

	//smooth scroll to section
	$('.nav-link').click(function(e) {
		let sectionId = $(this).attr('href');
		e.preventDefault();
		$('html, body').animate(
			{
				scrollTop: $(sectionId).offset().top
			},
			2000
		);
	});

	//sync navlinks with sections
	$(window).scroll(function() {
		$('section').each(function() {
			if ($(window).scrollTop() > $(this).offset().top - 100) {
				let sectionRef = $(this).attr('id');
				$('.nav-link').removeClass('active-link');
				$('.nav-link[href="' + '#' + sectionRef + '"]').addClass('active-link');
			}
		});
	});

	//nicescroll
	$('body').niceScroll({
		cursorcolor: '#1eb3ef',
		cursorwidth: '8px'
	});
});
