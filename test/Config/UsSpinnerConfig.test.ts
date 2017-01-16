import * as angular from 'angular';
import { IUsSpinnerConfig } from '../../src/Interfaces/IUsSpinnerConfig';

beforeEach(angular.mock.module('angularSpinner'));

describe('Provider: usSpinnerConfigProvider', function () {
	it('should have configurable options', function () {
		angular.mock.module(function (usSpinnerConfigProvider:IUsSpinnerConfig) {
			usSpinnerConfigProvider.setDefaults({color: 'black'});
		});

		inject(function (usSpinnerConfig:IUsSpinnerConfig) {
			expect(usSpinnerConfig.config.color).toBe('black');
		});
	});
	it('should support themes', function () {
		angular.mock.module(function (usSpinnerConfigProvider:IUsSpinnerConfig) {
			usSpinnerConfigProvider.setTheme('bigRed', {color: 'red', speed: 2});
		});

		inject(function (usSpinnerConfig:IUsSpinnerConfig) {
			expect(usSpinnerConfig.themes['bigRed'].color).toBe('red');
		});
	});
});
