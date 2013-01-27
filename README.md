# lazyIamges

## lazyIamges

pjax is a jQuery plugin that uses ajax and pushState to deliver a fast browsing experience with real permalinks, page titles, and a working back button.

pjax works by grabbing html from your server via ajax and replacing the content of a container on your page with the ajax'd html. It then updates the browser's current url using pushState without reloading your page's layout or any resources (js, css), giving the appearance of a fast, full page load. But really it's just ajax and pushState.

For [browsers that don't support pushState][compat] pjax fully degrades.

## Overview

pjax is not fully automatic. You'll need to setup and designate a containing element on your page that will be replaced when you navigate your site.

Consider the following page.

``` html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <h1>My Site</h1>
</body>
</html>
```
bla bla bla

``` javascript
$(document).bla('a', '#bla')
```

bla

## Installation

### standalone

bla bla

```
curl -O asdf
```

**WARNING** Do not bla bla

## Dependencies

asdf

## Compatibility

asdf

## Usage

### `asdf.asdf.asdf`

bla

``` javascript
$(document).bla();
```

bla

``` javascript
$(document).bla()
```

bla

1. `$(document).bla()`
2. `$(document).bla()`

bla bla:

1. first
2. second
3. third

### `$.pjax.click`

bla

**NOTE** note stuff

### Events

asdf

#### start and end

* `afd` - asdf
* `asdf:asfd` - asdf

asddsf

#### ajax related

* `sadfsda:afsafs` - Fired before the pjax request begins. Returning false will abort the request.

`send` and `complete` are a good pair of events to use if you are implementing a loading indicator. They'll only be triggered if an actual request is made, not if it's loaded from cache.


[compat]: http://www.google.de
