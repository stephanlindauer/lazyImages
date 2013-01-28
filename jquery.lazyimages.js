/*
 *  Project: lazyImages
 *  Description: jQuery plugin for lazy loading images
 *  Author: stephan lindauer - @stephanlindauer - www.punini.de
 */

;(function($, window, document, undefined) {

	$.fn.lazyImages = function(customSettings) {

		var defaultSettings = {
			threshold : 100,
			sourceAttribute : "data-original",
		}

		var notYetLoadedImages = [];
		var settings = $.extend({}, defaultSettings, customSettings);

		this.each(function() {
			$this = $(this);
			notYetLoadedImages.push($this);
		});

		window.onscroll = checkPositionsAndLoad;

		checkPositionsAndLoad();

		function checkPositionsAndLoad() {

			var length = notYetLoadedImages.length;
			if (length == 0) {
				return;
			}

			var foldY = window.innerHeight + window.pageYOffset;

			var currentElement = null;
			var loadedPictureIndexes = [];

			for (var i = 0; i < length; i++) {
				currentElement = notYetLoadedImages[i];
				deltaY = currentElement.offset().top;

				//if visble
				if (deltaY <= foldY + settings.threshold) {
					var actualImageSrc = currentElement.attr(settings.sourceAttribute);
					currentElement.attr("src", actualImageSrc)
					loadedPictureIndexes.push(i);
				}
			}

			var loadedLength = loadedPictureIndexes.length - 1;

			for (var u = loadedLength; u >= 0; u--) {
				notYetLoadedImages.splice(u, 1);
			}

		}

		return this;
	};

})(jQuery, window, document);
