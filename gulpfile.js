var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var minify = require('gulp-minify');
var htmlmin = require('gulp-htmlmin');
var svgmin = require('gulp-svgmin');
var connect = require('gulp-connect');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var buffer = require("vinyl-buffer");

var plugins = [
     autoprefixer({browsers: ['last 1 version']}),
     cssnano()
 ];

gulp.task('styles', function(){
  return gulp.src('index.scss')
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(gulp.dest('dist/'))
});

gulp.task('scripts', function(){
  var b = browserify({
    entries: './index.js',
  });

  return b.bundle()
   .pipe(source('index.js'))
   .pipe(buffer())
   .pipe(minify({
     ext:{
       source: false,
       min:'.js'
     }
   }))
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
  gulp.watch('index.js', ['scripts']);
  gulp.watch('./styles/*.scss', ['styles']);
  gulp.watch('*.svg', ['svg']);
});

gulp.task('default', ['styles', 'scripts', 'html', 'svg','webserver', 'watch'], function(){});
