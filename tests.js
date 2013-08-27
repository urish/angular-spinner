/* License: MIT.
 * Copyright (C) 2013, Uri Shaked.
 */

'use strict';

describe('Directive: us-spinner', function () {
	var Spinner;

	beforeEach(module(function($provide) {
		Spinner = jasmine.createSpy('Spinner');
		Spinner.prototype.spin = jasmine.createSpy('Spinner.spin');
		Spinner.prototype.stop = jasmine.createSpy('Spinner.spin');

		$provide.value('$window', {
			location: angular.copy(window.location),
			navigator: angular.copy(window.navigator),
			document: window.document,
			Spinner: Spinner
		});
	}));

	beforeEach(module('angularSpinner'));

	it('should create a spinner object', inject(function ($rootScope, $compile) {
		var element = angular.element('<div us-spinner></div>');
		element = $compile(element)($rootScope);
		$rootScope.$digest();
		expect(Spinner).toHaveBeenCalled();
	}));

	it('should start spinning the spinner automatically', inject(function ($rootScope, $compile) {
		var element = angular.element('<div us-spinner></div>');
		element = $compile(element)($rootScope);
		$rootScope.$digest();
		expect(Spinner.prototype.spin).toHaveBeenCalled();
		expect(Spinner.prototype.stop).not.toHaveBeenCalled();
	}));

	it('should start spinning the second spinner without stopping the first one', inject(function ($rootScope, $compile) {
		var element = angular.element('<div us-spinner></div>');
		element = $compile(element)($rootScope);
		var secondElement = angular.element('<div us-spinner></div>');
		secondElement = $compile(element)($rootScope);
		$rootScope.$digest();
		expect(Spinner.prototype.spin.callCount).toBe(2);
		expect(Spinner.prototype.stop).not.toHaveBeenCalled();
	}));

	it('should set spinner options as given in attribute', inject(function ($rootScope, $compile) {
		var element = angular.element('<div us-spinner="{width:15}"></div>');
		element = $compile(element)($rootScope);
		$rootScope.$digest();
		expect(Spinner.mostRecentCall.args[0].width).toBe(15);
	}));

	it('should update spinner options in response to scope updates', inject(function ($rootScope, $compile) {
		$rootScope.actualWidth = 25;
		var element = angular.element('<div us-spinner="{width:actualWidth}"></div>');
		element = $compile(element)($rootScope);
		$rootScope.$digest();
		expect(Spinner.mostRecentCall.args[0].width).toBe(25);
		expect(Spinner.prototype.stop).not.toHaveBeenCalled();

		$rootScope.actualWidth = 72;
		$rootScope.$digest();
		expect(Spinner.mostRecentCall.args[0].width).toBe(72);
		expect(Spinner.prototype.stop).toHaveBeenCalled();
		expect(Spinner.prototype.spin.callCount).toBe(2);
	}));

	it('should stop the spinner when the scope is destroyed', inject(function ($rootScope, $compile) {
		var scope = $rootScope.$new();
		var element = angular.element('<div us-spinner></div>');
		element = $compile(element)(scope);
		$rootScope.$digest();
		expect(Spinner.prototype.stop).not.toHaveBeenCalled();
		scope.$destroy();
		expect(Spinner.prototype.stop).toHaveBeenCalled();
	}));
});
