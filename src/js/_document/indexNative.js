/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const viewportAnimation = () => {
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
		let elSelector = 'header',
			$element = $(elSelector);

		if (!$element.length) return true;

		let elHeight = 0,
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

			if (wScrollCurrent <= 0)
				$element.css('top', 0);
			else if (wScrollDiff > 0)
				$element.css('top', elTop > 0 ? 0 : elTop);
			else if (wScrollDiff < 0) {
				if (wScrollCurrent + wHeight >= dHeight - elHeight)
					$element.css('top', (elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0);
				else
					$element.css('top', Math.abs(elTop) > elHeight ? -elHeight : elTop);
			}

			wScrollBefore = wScrollCurrent;
		});
	}


	const menuCB = () => {
		$('[menu-link-js]').on('click', (ev) => {
			const el = $(ev.currentTarget),
				elParent = el.closest('.menu__link-block');

			elParent.find('.menu__link-dropdown').slideToggle(350);
		});
	};


	const lineAnimation = () => {
		const controller = new ScrollMagic.Controller();

		const tl1 = new TimelineMax(),
			tl2 = new TimelineMax(),
			tlDoctorPhoto = new TimelineMax();

		tlDoctorPhoto.set("[welcome-img-js]", {
			opacity: 0,
			transformOrigin: 'center',
			y: '100'
		});

		tl1.to(".welcome__bg-line-1 div", 2, {scaleX: 0, ease: Power2.easeInOut});
		tl2.to(".welcome__bg-line-2 div", 2, {scaleX: 0, ease: Power2.easeInOut});

		tlDoctorPhoto.to('[welcome-img-js]', 1, {opacity: 1, y:0, ease: Power2.easeInOut});

		const scene1 = new ScrollMagic.Scene({triggerElement: "#welcomeLine1", duration: 1000})
			.setTween(tl1)
			// .addIndicators({name: "1 (duration: 0)"})
			.addTo(controller);

		const scene2 = new ScrollMagic.Scene({triggerElement: "#welcomeLine2", duration: 1000})
			.setTween(tl2)
			// .addIndicators({name: "1 (duration: 0)"})
			.addTo(controller);

		const sceneDoctor = new ScrollMagic.Scene({triggerElement: "#welcome", duration: 1000})
			.setTween(tlDoctorPhoto)
			// .addIndicators({name: "Doctor"})
			.addTo(controller);
	};
	/*
	* CALLBACK :: end
	* ============================================= */


	/**
	 * @name initNative
	 *
	 * @description Init all method
	 */
	const initNative = () => {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initSwiper();
		initHamburger();
		initStellar();
		// ==========================================

		// callback
		viewportAnimation();
		stickyHeader();
		menuCB();
		lineAnimation();
		// ==========================================
	};
	initNative();
})();
