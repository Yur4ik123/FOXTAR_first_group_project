const gulp = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const rename  =  require('gulp-rename');
const concat  =  require('gulp-concat');
var browserSync = require('browser-sync').create();
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var clean = require('gulp-clean');
// Static server
gulp.task('browser', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('clean', function () {
    return gulp.src('./app/css', {read: false})
    .pipe(clean());
})
gulp.task('sass', function () {
    return gulp.src('./app/scss/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([ autoprefixer() ]))
        .pipe(csso())
        .pipe(rename({
            basename: "allstyle",
            suffix: '.min'
          }))
        .pipe(gulp.dest('./app/css'));
});


/* gulp.task('allCss', function () { 
    return gulp.src('./app/css/*.css')
        .pipe(concat('allstyle.css'))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(csso())
        .pipe(rename({
            suffix: '.min'
          }))
        .pipe(gulp.dest('./app/css'));
}); */
gulp.task('minCss', gulp.series('clean', 'sass'));

gulp.task('watch', function(){
     gulp.watch('./app/scss/*.scss', gulp.series('minCss'));
     gulp.watch("app/*.html").on('change', browserSync.reload);
     gulp.watch("app/css/*.css").on('change', browserSync.reload);

})

gulp.task('default', gulp.series('minCss', gulp.parallel('browser', 'watch')))