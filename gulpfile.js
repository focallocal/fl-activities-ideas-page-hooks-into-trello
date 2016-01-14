var gulp = require("gulp");
var mustache = require("gulp-mustache");
var sass = require('gulp-sass');

gulp.task('default', ['compile','sass']);
gulp.task('watch', ['sass:watch','mustache:watch']);

gulp.task('compile', function() {
  gulp.src("./templates/front-page.html")
  	.pipe(mustache("data.json"))
  	.pipe(gulp.dest("./"));
});

gulp.task('mustache:watch',function() {
  gulp.watch('./templates/*',['compile']);
  gulp.watch('./data.json',['compile']);
})


gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});