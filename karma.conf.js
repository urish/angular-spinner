/* License: MIT.
 * Copyright (C) 2013, 2014, Uri Shaked and contributors.
 */

'use strict';

var webpackConf = require('./webpack.config.js');

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		logLevel: config.LOG_INFO,
		browsers: ['PhantomJS'],
		singleRun: true,
		reporters: ['dots', 'coverage'], 
		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'src/angular-spinner.ts',
			'test/index.ts'
		],
		webpack: webpackConf,
		preprocessors: {
			'src/angular-spinner.ts': ['webpack', 'sourcemap'], 
			'test/index.ts': ['webpack', 'sourcemap']
		},
		coverageReporter: {
			type: 'lcov',
			dir: 'coverage/'
		}
	});
};
