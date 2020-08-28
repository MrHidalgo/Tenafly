

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {

  const partnersSlider = new Swiper('.partnersSlider', {
    loop: true,
    effect: 'slide',
   	speed: 800,
    slidesPerView: 6,
    spaceBetween: 0,
		autoplay: {
		  delay: 5000,
			disableOnInteraction: false
		},
    /*breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },*/
    navigation: {
      nextEl: '.partners__btn--next',
      prevEl: '.partners__btn--prev',
    }
  });

  const staffSlider = new Swiper('.staffSlider', {
		freeMode: false,
    loop: true,
    effect: 'slide',
   	speed: 800,
    slidesPerView: 'auto',
    spaceBetween: 30,
		touchMoveStopPropagation:false,
		simulateTouch : false,
		allowSwipeToNext: true,
		allowSwipeToPrev: true,
		allowPageScroll: "auto",
    navigation: {
      nextEl: '.staff__btn--next',
      prevEl: '.staff__btn--prev',
    },
		on: {
			"init" : function() {
				this.snapGrid = [...this.slidesGrid];
			}
		}
  });
};
