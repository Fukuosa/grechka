var gulp = require('gulp'),
	less = require('gulp-less'),
	connect = require('gulp-connect'),
	browserify = require('gulp-browserify'),
	babelify = require('babelify');

module.exports = function () {

	gulp.task('copy:tmp', function () {
		gulp.src(['index.html', 'favicon.ico'])
			.pipe(connect.reload())
			.pipe(gulp.dest('.tmp'));
	});

	gulp.task('less:tmp', function () {
		gulp.src('less/app.less')
			.pipe(less())
			.pipe(connect.reload())
			.pipe(gulp.dest('.tmp/css'));
	});

	gulp.task('js:tmp', function () {
		gulp.src('js/app.js')
			.pipe(browserify({
				transform: 'babelify',
				debug: true
			}))
			.pipe(gulp.dest('.tmp/js'));
	});

	gulp.task('webserver', function () {
		connect.server({
			root: ['.tmp'],
			port: 3501,
			livereload: true
		});
	});

};