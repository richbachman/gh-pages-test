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

gulp.task('clean:dist', function(done) {
  //return del.sync(['dist'])
  del(['./dist']);
  done();
});

// gulp.task('build', function(done) {
//   runSequence(
//     ['clean:dist'], ['useref']
//   );
//   done();
// });

gulp.task('build', gulp.series('clean:dist', gulp.parallel('useref')));

gulp.task('deploy', () => src('./dist/**/*').pipe(ghPages()));
