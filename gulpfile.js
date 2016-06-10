/*******************************
 Set-up
 *******************************/

var
    gulp = require('gulp-help')(require('gulp')),

// utility
    clean = require('./tasks/clean'),
    publish = require('./tasks/publish'),
    release = require('./tasks/production')
;


/*******************************
 Tasks
 *******************************/

gulp.task('clean', 'Clean publish folder', clean);
gulp.task('publish', 'Publish folder', publish);
gulp.task('publish', 'Publish folder', release);
