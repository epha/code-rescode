'use strict';

var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	mocha = require('gulp-mocha');

var config = {
	jshint: {
		node: true,
		asi: true, // Suppress semi-colon warnings
		shadow: true, // Supress "already defined" warnings
		evil: true, // Supress "eval" warnings
		sub: true, // Suppress "dot notation" warnings

		'-W009': false, // Suppress "array literal notation [] is preferable" warning
		'-W010': false, // Suppress "object literal notation {} is preferable" warning

		'-W038': false, // Suppress "used out of scope." warnings
		'-W041': false, // Suppress "== vs ===" warnings
		'-W088': false, // Suppress "Creating global 'for' variable." warnings

		undef: true // Enforce "variables must be defined"
	},
	mocha: {
		run: true,
		reporter: 'spec'
	}
};

// Define `gulp jshint`
gulp.task('jshint', function() {
	return gulp.src('lib/**/*.js')
		.pipe(jshint(config.jshint))
		.pipe(jshint.reporter('jshint-stylish', {verbose: true}));
});

// Define `gulp mocha`
gulp.task('mocha', function() {
	return gulp.src('tests/**/*.js')
		.pipe(mocha(config.mocha));
});

gulp.task('default', ['jshint', 'mocha']);