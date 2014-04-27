var gulp       = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function(){
	gulp.watch('src/javascript/**', ['browserify']);
	gulp.watch('src/sass/**', ['styles']);
	gulp.watch('src/images/**', ['images']);
	gulp.watch('src/fonts/**', ['fonts']);
    gulp.watch('src/*.html', ['html']);
	livereload();
});
