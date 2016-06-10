var
    gulp        = require('gulp'),
    del         = require('del'),
    runSequence = require('run-sequence')
    ;

var bases = {
    src: 'public/'
};

// Process scripts and concatenate them into one output file
gulp.task('release-files', function () {
    gulp.src(['public/**/*'])
        .pipe(gulp.dest(''));
});

// Define the default task as a sequence of the above tasks
gulp.task('release', function (callback) {
    runSequence('release-files', callback);
});

module.exports = function (callback) {
    runSequence('release-files', callback);
}
