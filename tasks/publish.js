var
    gulp        = require('gulp'),
    del         = require('del'),
    runSequence = require('run-sequence')
    ;

var bases = {
    app: 'public/libs/semantic/',
    dist: 'semantic/dist/'
};

var paths = {
    scripts: ['**/*min.js'],
    styles: ['**/*min.css'],
    themes: ['themes/**']
};

// Process scripts and concatenate them into one output file
gulp.task('publish-scripts', function () {
    gulp.src(paths.scripts, {cwd: bases.dist})
        .pipe(gulp.dest(bases.app));
});

// publish all other files to dist directly
gulp.task('publish-styles', function () {
    gulp.src(paths.styles, {cwd: bases.dist})
        .pipe(gulp.dest(bases.app));
});

// publish all other files to dist directly
gulp.task('publish-themes', function () {
    gulp.src(paths.themes, {cwd: bases.dist})
        .pipe(gulp.dest(bases.app + 'themes/'));
});

// Define the default task as a sequence of the above tasks
gulp.task('publish-files', function (callback) {
    runSequence('clean',
        ['publish-scripts', 'publish-styles', 'publish-themes'],
        callback);
});

module.exports = function (callback) {
    runSequence('clean',
        ['publish-scripts', 'publish-styles', 'publish-themes'],
        callback);
}
