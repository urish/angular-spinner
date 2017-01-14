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
		singleRun: true,
		reporters: ['dots'], //, 'coverage'],
		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'node_modules/spin.js/spin.js',
			'dist/angular-spinner.js',
			'tests.js'
		],
		// preprocessors: {
		// 	'dist/angular-spinner.js': 'coverage'
		// },
		// coverageReporter: {
		// 	type: 'lcov',
		// 	dir: 'coverage/'
		// }
	});
};
