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

		if (mobileContainer.classList.contains('is-open')) {
			mobileContainer.classList.add("is-animated");
			mobileContainer.classList.remove("is-open");

			setTimeout(function () {
				mobileContainer.classList.remove("is-animated");
			}, 300);
		} else {
			mobileContainer.classList.add("is-open");
		}

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
 * @name initStellar
 * @description Stellar.js is a jQuery plugin that provides parallax scrolling effects to any scrolling element.
 *
 * Parallax Elements
 * - data-stellar-ratio="1"
 *
 * Parallax Backgrounds
 * - data-stellar-background-ratio="1"
 */
var initStellar = function initStellar() {
	if ($("[parallax-js]").length) {
		$(function () {
			$.stellar({
				// Set scrolling to be in either one or both directions
				horizontalScrolling: false,
				verticalScrolling: true,

				// Set the global alignment offsets
				horizontalOffset: 0,
				verticalOffset: 0,

				// Refreshes parallax content on window load and resize
				responsive: false,

				// Select which property is used to calculate scroll.
				// Choose 'scroll', 'position', 'margin' or 'transform',
				// or write your own 'scrollProperty' plugin.
				scrollProperty: 'scroll',

				// Select which property is used to position elements.
				// Choose between 'position' or 'transform',
				// or write your own 'positionProperty' plugin.
				positionProperty: 'transform',

				// Enable or disable the two types of parallax
				parallaxBackgrounds: true,
				parallaxElements: true,

				// Hide parallax elements that move outside the viewport
				hideDistantElements: false,

				// Customise how elements are shown and hidden
				hideElement: function hideElement($elem) {
					$elem.hide();
				},
				showElement: function showElement($elem) {
					$elem.show();
				}
			});
		});
	}
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
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 0
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 0
			},
			1365: {
				slidesPerView: 6,
				spaceBetween: 0
			}
		},
		navigation: {
			nextEl: '.partners__btn--next',
			prevEl: '.partners__btn--prev'
		}
	});

	var staffSlider = new Swiper('.staffSlider', {
		freeMode: false,
		loop: true,
		effect: 'slide',
		speed: 800,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		slidesPerView: 'auto',
		spaceBetween: 30,
		touchMoveStopPropagation: false,
		simulateTouch: false,
		allowSwipeToNext: true,
		allowSwipeToPrev: true,
		allowPageScroll: "auto",
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
	var initPathFloatingAnimation = function initPathFloatingAnimation() {
		var xMin = -5,
		    xMax = 5,
		    yMin = -5,
		    yMax = 5,
		    positionsPerElement = 5,
		    secondsPerIteration = 5,
		    elements = $("[floating-node-js]");

		for (var i = 0; i < elements.length; i++) {
			randomFloat(elements[i], positionsPerElement, secondsPerIteration);
		}

		function random(min, max) {
			return min + Math.random() * (max - min);
		}

		function randomFloat(element, positions, duration) {
			var tl = new TimelineMax({
				repeat: -1,
				yoyo: true,
				delay: Math.random() * duration
			});

			for (var _i = 0; _i < positions; _i++) {
				tl.to(element, duration, {
					x: random(xMin, xMax),
					y: random(yMin, yMax),
					ease: Sine.easeInOut
				});
			}

			return tl;
		}
	};

	var viewportAnimation = function viewportAnimation() {
		AOS.init({
			offset: 120,
			delay: 50,
			duration: 800,
			easing: 'ease-in-out-cubic',
			mirror: false,
			once: true
		});
	};

	function stickyHeader() {
		var elSelector = 'header',
		    $element = $(elSelector);

		if (!$element.length) return true;

		var elHeight = 0,
		    elTop = 0,
		    $document = $(document),
		    dHeight = 0,
		    $window = $(window),
		    wHeight = 0,
		    wScrollCurrent = 0,
		    wScrollBefore = 0,
		    wScrollDiff = 0;

		$window.on('scroll', function () {

			elHeight = $element.outerHeight();
			dHeight = $document.height();
			wHeight = $window.height();
			wScrollCurrent = $window.scrollTop();
			wScrollDiff = wScrollBefore - wScrollCurrent;
			elTop = parseInt($element.css('top')) + wScrollDiff;

			if (wScrollCurrent <= 0) $element.css('top', 0);else if (wScrollDiff > 0) $element.css('top', elTop > 0 ? 0 : elTop);else if (wScrollDiff < 0) {
				if (wScrollCurrent + wHeight >= dHeight - elHeight) $element.css('top', (elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0);else $element.css('top', Math.abs(elTop) > elHeight ? -elHeight : elTop);
			}

			wScrollBefore = wScrollCurrent;
		});
	}

	var menuCB = function menuCB() {
		$('[menu-link-js]').on('click', function (ev) {
			var el = $(ev.currentTarget),
			    elParent = el.closest('.menu__link-block');

			elParent.find('.menu__link-dropdown').slideToggle(350);
		});
	};
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
		initStellar();
		// ==========================================

		// callback
		initPathFloatingAnimation();
		viewportAnimation();
		stickyHeader();
		menuCB();
		// ==========================================
	};
	initNative();
})();