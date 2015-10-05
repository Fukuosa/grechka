var gulp = require('gulp'),
	less = require('gulp-less'),
	minifyCss = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	connect = require('gulp-connect'),
	browserify = require('gulp-browserify'),
	babelify = require('babelify'),
	uglifyify = require('uglifyify');

gulp.task('copy', function () {
	gulp.src(['index.html', 'favicon.ico'])
		.pipe(connect.reload())
		.pipe(gulp.dest('dist'));
});

gulp.task('less', function () {
	gulp.src('less/app.less')
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['last 4 versions'],
			cascade: false
		}))
		.pipe(minifyCss())
		.pipe(connect.reload())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('js', function () {
	gulp.src('js/app.js')
		.pipe(browserify({
			transform: ['babelify', 'uglifyify'],
			debug: !gulp.env.production
		}))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('webserver', function () {
	connect.server({
		root: ['dist'],
		port: 3501,
		livereload: true
	});
});

gulp.task('default', ['copy', 'js', 'less', 'webserver'], function () {
	gulp.watch('index.html', ['copy']);
	gulp.watch('js/**/*.js', ['js']);
	gulp.watch('less/**/*.less', ['less']);
});