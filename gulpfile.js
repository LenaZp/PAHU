'use strict';

const gulp = require ('gulp');
const sass = require ('gulp-sass');
const autoprefixer = require ('gulp-autoprefixer');

gulp.task ('sass', function() {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/styles/'))
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', ['sass'])
});
