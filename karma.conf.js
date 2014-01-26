/* License: MIT.
 * Copyright (C) 2013, 2014, Uri Shaked and contributors.
 */

'use strict';

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		logLevel: config.LOG_INFO,
		browsers: ['PhantomJS'],
		autoWatch: true,
		reporters: ['dots', 'coverage'],
		files: [
			'components/angular/angular.js',
			'components/angular-mocks/angular-mocks.js',
			'components/spin.js/spin.js',
			'angular-spinner.js',
			'tests.js'
		],
		preprocessors: {
			'components/spin.js/spin.js': 'coverage',
			'angular-spinner.js': 'coverage'
		}
	});
};
