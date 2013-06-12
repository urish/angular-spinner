/* License: MIT.
 * Copyright (C) 2013, Uri Shaked.
 */

/*global JASMINE, JASMINE_ADAPTER, LOG_INFO, files:true, logLevel:true, browsers:true, singleRun:true */

basePath = '';

files = [
	JASMINE,
	JASMINE_ADAPTER,
	'components/angular/angular.js',
	'components/angular-mocks/angular-mocks.js',
	'components/spin.js/dist/spin.js',
	'angular-spinner.js',
	'tests.js'
];

logLevel = LOG_INFO;

browsers = ['PhantomJS'];

singleRun = true;
