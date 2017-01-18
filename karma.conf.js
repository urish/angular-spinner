/* License: MIT.
 * Copyright (C) 2013, 2014, Uri Shaked and contributors.
 */

'use strict';

var webpackConf = require('./webpack.config.js');

webpackConf.entry = {};
webpackConf.module.postLoaders = [
    {
        test: /\.ts$/,
        loader: 'istanbul-instrumenter-loader',
        exclude: [
            'node_modules',
			/test/
        ]
    }
];

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine', 'source-map-support'],
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
			'src/angular-spinner.ts': ['webpack'], 
			'test/index.ts': ['webpack']
		},
		coverageReporter: {
			type: 'lcov',
			dir: 'coverage/'
		},
		mime: {
			'text/x-typescript': ['ts']
		}
	});
};
