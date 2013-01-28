# lazyIamges

## What's it for?

lazyImages is a lightweight jQuery plugin that helps you make your site load 
faster by postponing the loading of images until they get close to the viewport.

## Usage

### Example Implementation

``` html
	<!DOCTYPE html>
	<html>
	<head>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
		<script src="jquery.lazyimages.js"></script>
		<script type="text/javascript">
			$(document).ready(function() {
				$(".lazy-image").lazyImages({
					onLoad : function() {
						console.log("custom on load function");
					}
				});
			});
		</script>
	</head>
	<body>
	  	<h1>my picure gallery</h1>
		<img src="images/placeholder.png" data-original="images/1.jpg" class="lazy-image" width="200px" height="200px" />
		<br />
		<img src="images/placeholder.png" data-original="images/2.jpg" class="lazy-image" width="200px" height="200px" />
	</body>
	</html>
```

### Setup

Reference the jQuery library like so:
``` html
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
```

Include the lazyImages plugin 
* `jquery.lazyimages.js` - for development
* `jquery.lazyimages.min.js` - for production

``` html
	<script src="your-js-folder/jquery.lazyimages(.min).js"></script>
```

Prepare your img elements attributes

* `src` - can be empty, contain a loading gif or maybe even a base64 encoded transparent pixel XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
* `class` - choose your own class name to describe those images like class="lazyImages"
* `data-original` - define an attribute to store the actual source address of your image. You can also change the name of that attribute to something else like "rel=''" but you will have to let the plugin know by passing in the new name via the "sourceAttribute" field in the configuration object.
* `width and height` - not mandatory XXXXXXXXXXXXXXXXX but nice to have. Saves the browser from having to rerender certain bits and pieces of your site when it gets the actual dimensions.

``` html
<img src="images/placeholder.png" data-original="images/1.jpg" class="lazy-image" width="200px" height="200px" />
```

Fire up the plugin by passing in the selector of your images and if needed a custom configuration (in this case the threshold is changed)

``` html
	<script type="text/javascript">
		$(document).ready(function() {
			$(".lazy-image").lazyImages({
				threshold : 500
			});
		});
	</script>
```

### Default settings

asdf


[compat]: http://www.google.de
