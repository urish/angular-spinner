/* License: MIT.
 * Copyright (C) 2013, 2014, Uri Shaked and contributors.
 */

'use strict';

module.exports = function (grunt) {
	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'angular-spinner.js',
				'tests.js',
				'karma.conf.js'
			]
		},
		uglify: {
			dist: {
				files: {
					'angular-spinner.min.js': 'angular-spinner.js'
				}
			}
		}
	});

	grunt.registerTask('test', [
		'jshint',
		'karma'
	]);

	grunt.registerTask('build', [
		'uglify'
	]);

	grunt.registerTask('default', ['build']);
};
