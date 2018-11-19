var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var useref = require('gulp-useref');
var runSequence = require('run-sequence');
var del = require('del');
var cached = require('gulp-cached');

gulp.task('useref', function() {
  return gulp.src('src/*.html')
  .pipe(useref())
  .pipe(cached('useref'))
  .pipe(gulp.dest('dist'));
});

gulp.task('clean:dist', function() {
  return del.sync(['dist'])
});

gulp.task('build', function(callback) {
  runSequence(
    ['clean:dist'], ['useref'],
    callback
  )
});
