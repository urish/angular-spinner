# angular-spinner

Angular directive to show an animated spinner (using [spin.js](http://fgnass.github.io/spin.js/))

Copyright (C) 2013, Uri Shaked <uri@urish.org>.

[![Build Status](https://travis-ci.org/urish/angular-spinner.png?branch=master)](https://travis-ci.org/urish/angular-spinner)

## Usage

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
spinner. For example :

```html
<span us-spinner></span>
```

You can also pass spinner options, for example:

```html
<span us-spinner="{radius:30, width:8, length: 16}"></span>
```

You can also use spinner in conjunction with the bundled service :

```html
<button ng-click="spin-me">Start spinner</button>
<button ng-click="spin-me">Stop spinner</button>

<span us-spinner spinner-key="spinner-1"></span>
```

the bundled service to activate and stop the spinner :

```js
app.controller('MyController', ['$scope', 'usSpinnerService', function($scope, usSpinnerService){
    $scope.startSpin = function(){
        usSpinnerService.spin('spinner-1');
    }
    $scope.stopSpin = function(){
        usSpinnerService.stop('spinner-1');
    }
}]);
```

Spinner with a key can also be rendered as active :
```html
<span us-spinner spinner-key="spinner-1" spinner-start-active="1"></span>
```

The spinner-key property will prevent the spinner to be active on render and will be used as an identifier (not unique) allowing you to
have several spinners controlled by the same key :

```html
<span us-spinner spinner-key="spinner-1"></span>
<span us-spinner spinner-key="spinner-2"></span>

... random html code ...

<!-- This spinner will be triggered along with the first "spinner-1" -->
<span us-spinner spinner-key="spinner-1"></span>
```

Possible configuration options are described in the [spin.js homepage](http://fgnass.github.io/spin.js/).

## License

Released under the terms of MIT License.

