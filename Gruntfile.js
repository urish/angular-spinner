/* License: MIT.
 * Copyright (C) 2013, 2014, Uri Shaked and contributors.
 */

'use strict';

module.exports = function (grunt) {
	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: [
				'/**',
				' * <%= pkg.name %> version <%= pkg.version %>',
				' * License: <%= pkg.license %>.',
				' * Copyright (C) <%= grunt.template.today("yyyy") %>, <%= pkg.author %> and contributors',
				' */'
			].join('\n')
		},
		dirs: {
			dest: 'dist'
		},

		concat: {
			options: {
				banner: '<%= meta.banner %>' + '\n' +
				'(function (factory) {' + '\n' +
				'	if (typeof define === \'function\' && define.amd) {' + '\n' +
				'		define([\'exports\', \'angular\', \'spin.js\'], factory);' + '\n' +
				'	} else if (typeof module === \'object\' && typeof module.exports === \'object\') {' + '\n' +
				'		factory(module.exports, require(\'angular\'), require(\'spin.js\'));' + '\n' +
				'	} else if (typeof angular !== \'undefined\') {' + '\n' +
				'		root = (typeof root !== \'undefined\') ? root : {};' + '\n' +
				'		factory((root.exports || (root.exports = {})), angular, Spinner);' + '\n' +
				'	} else {' + '\n' +
				'		throw new Error(\'Unable to initialize angular-spinner\');' + '\n' +
				'	}' + '\n' +
				'})(function(exports, angular, Spinner) {' + '\n',
				footer: '});'
			},
			dist: {
				src: ['src/angular-spinner.js'],
				dest: '<%= dirs.dest %>/<%= pkg.name %>.js'
			}
		},

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
				'src/angular-spinner.js',
				'tests.js',
				'karma.conf.js'
			]
		},
		uglify: {
			options: {
				banner: '<%= meta.banner %>',
				sourceMap: true
			},
			dist: {
				src: ['<%= concat.dist.dest %>'],
				dest: '<%= dirs.dest %>/<%= pkg.name %>.min.js'
			}
		},
	});

	grunt.registerTask('test', [
		'jshint',
		'karma'
	]);

	grunt.registerTask('build', [
		'concat',
		'uglify'
	]);

	grunt.registerTask('default', ['build']);
};
