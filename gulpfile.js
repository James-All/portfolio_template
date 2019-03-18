const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css

 function style(){
     //find the scss file
     return gulp.src('./dist/scss/**/*.scss')
     //compile scss into css
     //if any errors in our sass-log them for us
     .pipe(sass().on('error', sass.logError))
     //output compiled scss
     .pipe(gulp.dest('./dist/css'))
     //streams our compiled sass to all browsers
     .pipe(browserSync.stream());
 }


//watch for changes and update changes for us automatically

function watch(){
    //launch server in root of project
    browserSync.init({
        server:({
            baseDir:'./dist'
        })
    });
    //watch for changes in scss, html & js
    //then run style function OR reload html/js
    gulp.watch('./dist/scss/**/*.scss', style)
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}


 exports.style = style;
 exports.watch = watch;