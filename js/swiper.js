var mySwiper = new Swiper('.news-slider', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},

	//scrollbar: {
		//el: '.swiper-scrollbar',
		//draggable: true
	//},

	simulateTouch: true,

	touchRatio: 1,

	touchAngle:45,

	grabCursor: true,

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	
	autoHeight: true,
	
	slidesPerView: 3,

	loop: true,

	//effect: 'coverflow',

	//coverflowEffect: {
		//rotate: 20,
		//stretch: 50,
		//slideShadows: true,
	//},

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		540: {
			slidesPerView: 2,
		},
		800: {
			slidesPerView: 3,
		},
	},

	preloaderImages: false,

	lazy: {
		loadOnTransitionStart: true,
		loadPrevNext: true,
	},

	watchSlidesProgress: true,
	watchSlidesVisibility: true,

	//virtual: {
		//slides: (function () {
			//let slide = []
			//for (let i = 0; i < 500; i++) {
			//	slide.push('<div class="swiper-slide">Gop №${i}</div>');
			//}
			//return slide;
	//	}()),
	//},

});