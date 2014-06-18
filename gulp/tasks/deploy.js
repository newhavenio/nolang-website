var gulp = require('gulp');
var awspublish = require('gulp-awspublish');

gulp.task('deploy', function() {

    // Create a new publisher
    var publisher = awspublish.create({
        key: process.env.AWS_ACCESS_KEY_ID,
        secret: process.env.AWS_SECRET_ACCESS_KEY,
        bucket: process.env.AWS_DEPLOY_BUCKET
    });

    return gulp.src("./build/**")

    // Publish
    .pipe(publisher.publish())

    // Delete files found in bucket that are not found locally
    .pipe(publisher.sync())

    // create a cache file to speed up consecutive uploads
    .pipe(publisher.cache())

    // print upload updates to console
    .pipe(awspublish.reporter());
});