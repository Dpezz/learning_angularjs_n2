var gulp = require('gulp');
var webserver = require('gulp-webserver');
var connect = require('gulp-connect');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;

gulp.task('webserver', function () {
  gulp.src('app')
    .pipe(webserver({
      port: '3000',
      livereload: true,
      open: true
    }));
});

gulp.task('html', function () {
  gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});

gulp.task('inject', function () {
  var sources = gulp.src(['./app/js/**/*.js', './app/css/**/*.css']);
  return gulp.src('index.html', {
      cwd: './app/'
    })
    .pipe(inject(sources, {
      read: false,
      ignorePath: '/app/',
      relative: true
    }))
    .pipe(gulp.dest('./app/'));
});

gulp.task('watch', function () {
  gulp.watch(['./app/**/*.html'], ['html']);
  gulp.watch(['./app/js/**/*.js'], ['inject']);
  gulp.watch(['./app/css/**/*.css'], ['inject']);
  gulp.watch(['./bower.json'], ['wiredep']);
});

// gulp.task('default',['webserver', 'wiredep', 'watch', 'notify']);
gulp.task('default', ['webserver', 'inject']);