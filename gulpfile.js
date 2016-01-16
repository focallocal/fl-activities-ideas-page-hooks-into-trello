var gulp = require("gulp");
var mustache = require("gulp-mustache");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

gulp.task('default', ['compile','sass']);
gulp.task('watch', ['sass:watch','mustache:watch']);

gulp.task('compile', function() {
  gulp.src("./templates/front-page.html")
  	.pipe(mustache("data.json").on('error',gutil.log,{showStack:true}))
  	.pipe(gulp.dest("./"));
});

gulp.task('mustache:watch',function() {
  gulp.watch('./templates/*',['compile']);
  gulp.watch('./data.json',['compile']);
})


gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});
