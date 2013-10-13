/* angular-spinner version 0.2.1
 * License: MIT.
 * Copyright (C) 2013, Uri Shaked.
 */
/*global angular*/


angular.module('angularSpinner', [])

.provider('usSpinnerConf', [function() {
    'use strict';

    /**
     *  This settings will be passed to the Spinner() function.
     *  <span us-spinner></span> will use the 'default' setting
     *  <span us-spinner="small"></span> will use the 'small' setting
     *  <span us-spinner="{ lines: 8}"></span> will use { lines: 8} as a setting
     *  If makeRoom options is true, will make sure the span element is big  to fit the spinner
     *  (height-wise and width-wise)
     */
    var options = {
        'default' :{ lines: 8, length: 4, width: 3, radius: 5, usMakeRoom : true },
        tiny: { lines: 8, length: 2, width: 2, radius: 3, usMakeRoom : true },
        small: { lines: 8, length: 4, width: 3, radius: 5, usMakeRoom : true },
        large: { lines: 10, length: 8, width: 4, radius: 8, usMakeRoom : true }
    };

    this.$get = function $getFn() {
        return options;
    };

}])

.directive('usSpinner', ['$window', 'usSpinnerConf', function ($window, usSpinnerConf) {
    'use strict';
    return {
        scope: {
            options : '@usSpinner'
        },
        link: function (scope, element, attr) {

            var spinner = null;

            function stopSpinner() {
                if (spinner) {
                    spinner.stop();
                    spinner = null;
                }
            }

            scope.$watch('options', function (options) {

                if (!options) {
                    options = usSpinnerConf['default'] || {};
                } else if (angular.isString(options)) {
                    options = usSpinnerConf[options] || {};
                }

                stopSpinner();
                spinner = new $window.Spinner(options);

                // make sure the element the spinner is targeted to is big enough to fit the spinner
                if (options.usMakeRoom) {
                    var diameter = spinner.opts.radius * 2 +
                        spinner.opts.length * 2 +
                        spinner.opts.width * 2;

                    if (element.width() < diameter) {
                        element.width(diameter);
                    }
                    if (element.height() < diameter) {
                        element.height(diameter);
                    }

                    element.css('display', 'inline-block');
                }

                spinner.spin(element[0]);
            }, true);

            scope.$on('$destroy', function () {
                stopSpinner();
            });
        }
    };
}]);
