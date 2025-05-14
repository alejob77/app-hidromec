let programas_carousel = $('#programas-carousel');
let docentes_carousel = $('#docentes-carousel');
let banner_carousel = $('#banner-carousel');
let servicio_carousel = $('#servicio-carousel');

lightGallery(document.getElementById('lightgallery'), {
	thumbnail: true,
	selector: '.lightg-item',
	download: false,
	escKey: true,
});



banner_carousel.owlCarousel({
	loop: true,
	nav: false,
	dots: false,
	slideTransition: 'linear',
	autoplayTimeout: 5000,
	autoplaySpeed: 5000,
	responsive: {
		0: {
			items: 1,
			center: true
		},
		992: {
			items: 1,
		}
	}
});

// programas_carousel.owlCarousel({
// 	margin: 30,
// 	loop: true,
// 	nav: false,
// 	dots: false,
// 	autoWidth: true,
// 	autoplay: true,
// 	slideTransition: 'linear',
// 	autoplayTimeout: 5000,
// 	autoplaySpeed: 5000,
// 	autoplayHoverPause: true,
// 	responsive: {
// 		0: {
// 			items: 1,
// 			center: true
// 		},
// 		992: {
// 			items: 3
// 		}
// 	}
// });

// servicio_carousel.owlCarousel({
// 	margin: 30,
// 	loop: true,
// 	nav: false,
// 	dots: false,
// 	autoWidth: true,
// 	autoplay: true,
// 	slideTransition: 'linear',
// 	autoplayTimeout: 5000,
// 	autoplaySpeed: 5000,
// 	autoplayHoverPause: true,
// 	responsive: {
// 		0: {
// 			items: 1,
// 			center: true
// 		},
// 		992: {
// 			items: 7
// 		}
// 	}
// });


lightGallery(document.getElementById('servicio-carousel'), {
	thumbnail: true,
	selector: '.lightg-item',
	download: false,
	escKey: true,
});

docentes_carousel.owlCarousel({
	margin: 30,
	loop: true,
	nav: false,
	dots: false,
	autoWidth: true,
	autoplay: true,
	slideTransition: 'linear',
	autoplayTimeout: 5000,
	autoplaySpeed: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			center: true
		},
		992: {
			items: 1,
			center: true,
			margin: 30
		}
	}
});

// Go to the next item
$('#rc-nav-next').click(function () {
	programas_carousel.trigger('next.owl.carousel', [400]);
})
// Go to the previous item
$('#rc-nav-prev').click(function () {
	// With optional speed parameter
	// Parameters has to be in square bracket '[]'
	programas_carousel.trigger('prev.owl.carousel', [400]);
});



$('.sec-q-s').click(function (event) {
	event.preventDefault();
	$("html, body").animate({
		scrollTop: $('#quienes-somos').offset().top - 105
	}, 800);
});

$('.sec-n-p').click(function (event) {
	event.preventDefault();
	$("html, body").animate({
		scrollTop: $('#nuestros-programas').offset().top - 105
	}, 800);
});

$('.sec-n-g').click(function (event) {
	event.preventDefault();
	$("html, body").animate({
		scrollTop: $('#nuestra-galeria').offset().top - 105
	}, 800);
});

$('.sec-n-d').click(function (event) {
	event.preventDefault();
	$("html, body").animate({
		scrollTop: $('#nuestros-docentes').offset().top - 105
	}, 800);
});

$('.sec-c-l').click(function (event) {
	event.preventDefault();
	$("html, body").animate({
		scrollTop: $('#como-llegar').offset().top - 105
	}, 800);
});

function openReveal(element) {
	$('.carousel-card.revealed').removeClass("revealed");
	$(element).parents(".carousel-card").addClass("revealed");
};

function closeReveal(element) {
	$(element).parents(".carousel-card").removeClass("revealed");
}
