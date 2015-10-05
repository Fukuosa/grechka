var gulp = require('gulp'),
	del = require('del'),
	ghPages = require('gulp-gh-pages'),
	developTask = require('./tasks/develop-task')(),
	productionTask = require('./tasks/production-task')();

gulp.task('clear', function () {
	del(['.tmp', 'dist']);
});

gulp.task('default', ['clear', 'copy:tmp', 'less:tmp', 'js:tmp', 'webserver'], function () {
	gulp.watch('index.html', ['copy:tmp']);
	gulp.watch('js/**/*.js', ['js:tmp']);
	gulp.watch('less/**/*.less', ['less:tmp']);
});

gulp.task('build', ['clear', 'include', 'copy:dist', 'less:dist', 'js:dist']);

gulp.task('deploy', function () {
	return gulp.src('./dist/**/*')
		.pipe(ghPages());
});
