var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var buffer = require("vinyl-buffer");
var gutil = require("gulp-util");

/* Styles */
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var plugins = [
     autoprefixer({browsers: ['last 1 version']}),
     cssnano()
 ];

/* Minification */
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var svgmin = require('gulp-svgmin');

/* Development Server */
var connect = require('gulp-connect');


gulp.task('styles', function(){
  return gulp.src('index.scss')
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(gulp.dest('dist/'))
});

gulp.task('scripts', function(){
  var b = browserify({
    entries: 'index.js',
  });

  return b.bundle()
   .pipe(source('index.js'))
   .pipe(buffer())
   .pipe(uglify())
   .on("error", gutil.log)
   .pipe(gulp.dest('dist/'))
});

gulp.task('html', function(){
  return gulp.src('index.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('svg', function(){
  return gulp.src('*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('dist/'))
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: 'dist',
  });
});

/* Watch Task For All Others */
gulp.task('watch', function(){
  gulp.watch('index.html', ['html']);
  gulp.watch('./scripts/*.js', ['scripts']);
  gulp.watch('./styles/*.scss', ['styles']);
  gulp.watch('*.svg', ['svg']);
});

gulp.task('default', ['styles', 'scripts', 'html', 'svg','webserver', 'watch'], function(){});
