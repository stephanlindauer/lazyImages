/*
 *  Project:
 *  Description:
 *  Author:
 *  License:
 */

;(function($, window, document, undefined) {

	$.fn.lazyImages = function(customSettings) {

		var defaultSettings = {
			threshold : "100px",
			elementIdentifier : ".lazy-image",
			sourceAttribute : "lazy-source",
			onLoad : function() {
				console.log("onload called");
			}
		}

		var settings = $.extend({}, defaultSettings, customSettings);

		var notYetLoadedImages = [];

		this.each(function() {
			notYetLoadedImages.push($(this));
		});

		//TODO register scroll listener

		return this;
	};

})(jQuery, window, document);
