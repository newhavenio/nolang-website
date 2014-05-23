var browserify   = require('browserify');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var livereload   = require('gulp-livereload');
var source       = require('vinyl-source-stream');

gulp.task('browserify', function(){
	return browserify('./src/js/app.js')
		.bundle({debug: true})
		.on('error', handleErrors)
		.pipe(source('js/app.js'))
		.pipe(gulp.dest('./build/'))
		.pipe(livereload());
});
