var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var minify = require('gulp-minify');

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
  return gulp.src('index.js')
    .pipe(minify({
      noSource: true,
      ext:{
        min:'.js'
      }
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('default', ['styles', 'scripts'], function(){});
