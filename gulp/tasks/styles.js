var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');

gulp.task('styles', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 1 version'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('./build/css'))
        .pipe(livereload())
        .pipe(notify({ message: 'Style task completed.' }));
});
