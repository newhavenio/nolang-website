var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');
var embedlr = require("gulp-embedlr");

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(embedlr())
        .pipe(gulp.dest('./build'))
        .pipe(livereload())
        .pipe(notify({ message: 'html task completed.' }));
});
