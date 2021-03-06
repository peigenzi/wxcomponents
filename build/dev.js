const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('wxss', () => {
  return gulp
    .src(['../src/**/*.scss'])
    .pipe(sass())
    .pipe(cssmin())
    .pipe(
      rename(path => {
        path.extname = '.wxss';
      })
    )
    .pipe(gulp.dest('../example/dist/'));
});

gulp.task('js', () => {
  return gulp.src(['../src/**/*.js']).pipe(gulp.dest('../example/dist/'));
});

gulp.task('wxml', () => {
  return gulp.src(['../src/**/*.wxml']).pipe(gulp.dest('../example/dist/'));
});

gulp.task('json', () => {
  return gulp.src(['../src/**/*.json']).pipe(gulp.dest('../example/dist/'));
});

gulp.task('auto', () => {
  gulp.watch('../src/**/*.scss', ['wxss']);
  gulp.watch('../src/**/*.js', ['js']);
  gulp.watch('../src/**/*.wxml', ['wxml']);
  gulp.watch('../src/**/*.json', ['json']);
});

gulp.task('default', ['wxss', 'js', 'wxml', 'json', 'auto'], () => {
  console.log('start');
});
