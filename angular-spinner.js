/* License: MIT.
 * Copyright (C) 2013, Uri Shaked.
 */

'use strict';

angular.module('angularSpinner', [])
	.directive('usSpinner', function ($window) {
		return {
			scope: true,
			link: function (scope, element, attr) {
				scope.spinner = null;
				scope.$watch(attr.usSpinner, function (options) {
					if (scope.spinner) {
						scope.spinner.stop();
					}
					scope.spinner = new $window.Spinner(options);
					scope.spinner.spin(element[0]);
				}, true);
			}
		}
	});
