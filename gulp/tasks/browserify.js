var browserify   = require('browserify');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var livereload   = require('gulp-livereload');
var source       = require('vinyl-source-stream');

gulp.task('browserify', function(){
	return browserify()
		.bundle({debug: true})
		.on('error', handleErrors)
		.pipe(source('app.js'))
		.pipe(gulp.dest('./build/'))
		.pipe(livereload());
});
