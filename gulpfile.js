var gulp = require('gulp');
var pump = require('pump');
var copy = require('copy');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var babel = require('gulp-babel');
var htmlmin = require('gulp-htmlmin');
var watch = require('gulp-watch');
var config = require('./gulp.config.js');

gulp.task('sass', function(cb) {
	pump([
		gulp.src(config.sassStyle),
		sass(),
		cleanCss(),
		concat(config.sassOutputFile),
		gulp.dest(config.sassOutput)
	], cb);
});

gulp.task('css-vendor', function(cb) {
	pump([
		gulp.src(config.cssVendorFiles),
		concat(config.cssVendorOutputFile),
		gulp.dest(config.cssVendorOutput)
	], cb);
});

gulp.task('js', function(cb) {
	pump([
		gulp.src(config.jsFiles),
		babel({
			presets: ['es2015']
		}),
		concat(config.jsOutputFile),
		gulp.dest(config.jsOutput)
	], cb);
});

gulp.task('directives-templates', function(cb) {
	pump([
		gulp.src(config.angularTemplates),
		htmlmin({collapseWhitespace: true}),
		gulp.dest('public/directives')
	], cb);
});

gulp.task('js-vendor', function(cb) {
	pump([
		gulp.src(config.jsVendorFiles),
		concat(config.jsVendorOutputFile),
		gulp.dest(config.jsVendorOutput)
	], cb);
});

gulp.task('fonts', function(cb) {
	for (var i in config.fonts)
		copy(config.fonts[i], config.fontsOutput, cb);
});

gulp.task('watch', function(cb) {
	watch(config.sassStyle, function() {
		gulp.start('sass');
	});
	
	watch(config.jsFiles, function() {
		gulp.start('js');
	});

	watch(config.angularTemplates, function() {
		gulp.start('directives-templates');
	});
});


gulp.task('default', [
	'sass',
	'css-vendor',
	'js',
	'js-vendor',
	'fonts',
	'watch',
	'directives-templates'
]);