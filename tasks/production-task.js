var gulp = require('gulp'),
	less = require('gulp-less'),
	minifyCss = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	browserify = require('gulp-browserify'),
	babelify = require('babelify'),
	uglifyify = require('uglifyify'),
	fileInclude = require('gulp-file-include');

module.exports = function () {

	gulp.task('include', function () {
		gulp.src('index.html')
			.pipe(fileInclude())
			.pipe(gulp.dest('dist'));
	});

	gulp.task('copy:dist', function () {
		gulp.src('favicon.ico').pipe(gulp.dest('dist'));
	});

	gulp.task('less:dist', function () {
		gulp.src('less/app.less')
			.pipe(less())
			.pipe(autoprefixer({
				browsers: ['last 4 versions'],
				cascade: false
			}))
			.pipe(minifyCss())
			.pipe(gulp.dest('dist/css'));
	});

	gulp.task('js:dist', function () {
		gulp.src('js/app.js')
			.pipe(browserify({
				transform: ['babelify', 'uglifyify']
			}))
			.pipe(gulp.dest('dist/js'));
	});
};