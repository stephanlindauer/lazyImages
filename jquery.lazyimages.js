/*
 *  Project: lazyImages
 *  Description: jQuery for loading of images only when they get close to the viewport
 *  Author: stephan lindauer
 */

;(function($, window, document, undefined) {

	$.fn.lazyImages = function(customSettings) {

		var defaultSettings = {
			threshold : 100,
			sourceAttribute : "data-original",
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
					console.log("asdf");
					currentElement.attr("src", "http://www.dafont.com/img/dafont.png")
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
	
	$.fn.lazyImages.loadAll = function() {
	
	}
	
})(jQuery, window, document);
