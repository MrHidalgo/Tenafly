/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const initPathFloatingAnimation = () => {
		let xMin = -5,
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
		initPathFloatingAnimation();
		viewportAnimation();
		stickyHeader();
		// ==========================================
	};
	initNative();
})();
