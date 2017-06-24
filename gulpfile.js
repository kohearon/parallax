var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var minify = require('gulp-minify');
var htmlmin = require('gulp-htmlmin');
var svgmin = require('gulp-svgmin');
var connect = require('gulp-connect');

var plugins = [
     autoprefixer({browsers: ['last 1 version']}),
     cssnano()
 ];

gulp.task('styles', function(){
  return gulp.src('*.scss')
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(gulp.dest('dist/'))
});

gulp.task('scripts', function(){
  return gulp.src('index.js')
    .pipe(minify({
      noSource: true,
      ext:{
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
  gulp.watch('*.scss', ['styles']);
  gulp.watch('*.svg', ['svg']);
});

gulp.task('default', ['styles', 'scripts', 'html', 'svg','webserver', 'watch'], function(){});
