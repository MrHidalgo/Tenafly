"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

  var btn = document.querySelector("[hamburger-js]"),
      hideScrollContainer = document.querySelectorAll("html, body"),
      mobileContainer = document.querySelector("[mobile-block-js]");

  /**
    * @description
   */
  btn.addEventListener("click", function (ev) {
    var elem = ev.currentTarget;

    elem.classList.toggle("is-active");
    mobileContainer.classList.toggle("is-open");

    hideScrollContainer.forEach(function (val, idx) {
      val.classList.toggle("is-hideScroll");
    });
  });
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {

  var partnersSlider = new Swiper('.partnersSlider', {
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
      prevEl: '.partners__btn--prev'
    }
  });

  var staffSlider = new Swiper('.staffSlider', {
    freeMode: false,
    loop: false,
    effect: 'slide',
    speed: 800,
    slidesPerView: 'auto',
    spaceBetween: 30,
    touchMoveStopPropagation: false,
    simulateTouch: false,
    allowSwipeToNext: true,
    allowSwipeToPrev: true,
    allowPageScroll: "auto ",
    navigation: {
      nextEl: '.staff__btn--next',
      prevEl: '.staff__btn--prev'
    },
    on: {
      "init": function init() {
        this.snapGrid = [].concat(_toConsumableArray(this.slidesGrid));
      }
    }
  });
};

/**
 * @description Document DOM ready.
 */
(function () {
  /*
  * =============================================
  * CALLBACK :: start
  * ============================================= */

  /*
  * CALLBACK :: end
  * ============================================= */

  /**
   * @name initNative
   *
   * @description Init all method
   */
  var initNative = function initNative() {
    // default
    initPreventBehavior();
    // ==========================================

    // lib
    initSwiper();
    initHamburger();
    // ==========================================

    // callback
    // ==========================================
  };
  initNative();
})();