angular-spinner
===============

Angular directive to show an animated spinner (using [spin.js](http://fgnass.github.io/spin.js/))

Copyright (C) 2013, Uri Shaked <uri@urish.org>.

[![Build Status](https://travis-ci.org/urish/angular-spinner.png?branch=master)](https://travis-ci.org/urish/angular-spinner)

Usage
-----
Include both spin.js and angular-spinner.js in your application.

```html
<script src="components/spin.js/dist/spin.js"></script>
<script src="components/angular-spinner/angular-spinner.js"></script>
```

Add the module `angularSpinner` as a dependency to your app module:

```js
var myapp = angular.module('myapp', ['angularSpinner']);
```

You can now start using the us-spinner directive to display an animated
spinner. For example

```html
<span us-spinner></span>
```

You can also pass spinner options, for example:
```html
<span us-spinner="{radius:30, width:8, length: 16}"></span>
```

Possible configuration options are described in the [spin.js homepage](http://fgnass.github.io/spin.js/).

License
----

Released under the terms of MIT License.

