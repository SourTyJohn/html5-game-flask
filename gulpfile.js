var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var notify = require("gulp-notify");


function errorAlert( error ) {
    console.log( "error while gulp: " + error.toString() );
}


const src_file = './src/index.js'
const dst_path = './static/js/'

gulp.task('default', function () {
    return gulp.src( src_file )
        .pipe(browserify({ transform: ['babelify'] }))
        .on('error', errorAlert)
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest( dst_path ))
        .pipe(notify({ title: "Success", message: "Well Done!" }));
})