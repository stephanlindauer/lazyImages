/*
 *  Project: lazyImages
 *  Description: jQuery for loading of images only when they get close to the viewport
 *  Author: stephan lindauer
 */

;(function($, window, document, undefined) {

	$.fn.lazyImages = function(customSettings) {

		var defaultSettings = {
			threshold : 100,
			sourceAttribute : "lazy-source",
			onLoad : function() {
				console.log("onload called");
			}
		}

		var notYetLoadedImages = [];
		var settings = $.extend({}, defaultSettings, customSettings);

		this.each(function() {
			$this = $(this);
			notYetLoadedImages.push($this);
			$this.css({
				'width' : '100px',
				'height' : '100px',
			});
		});

		window.onscroll = checkScrollingAndLoad;
		checkScrollingAndLoad();

		function checkScrollingAndLoad() {

			console.log(window.innerHeight);

			var foldY = window.innerHeight + window.pageYOffset;

			var length = notYetLoadedImages.length
			var currentElement = null;

			var loadedPictureIndexes = [];

			for (var i = 0; i < length; i++) {
				currentElement = notYetLoadedImages[i];
				deltaY = currentElement.offset().top;

				//if visble
				if (deltaY <= foldY + settings.threshold) {
					currentElement.attr("src", "http://www.dafont.com/img/dafont.png")
					loadedPictureIndexes.push(i);
				}
			}

			var loadedLength = loadedPictureIndexes.length - 1;

			for (var u = loadedLength; u >= 0; u--) {
				notYetLoadedImages.splice(u, 1);
				console.log("deleting " + u);
			}
			console.log(loadedPictureIndexes);

		}

		return this;
	};
	// $.fn.lazyImages.loadAll() {
	//
	// }
})(jQuery, window, document);
