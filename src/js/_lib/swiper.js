

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
};
