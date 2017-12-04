var gulp = require('gulp');
var webserver = require('gulp-webserver');
var concat =  require('gulp-concat');
var minifyJs= require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-htmlmin');
gulp.task('minifycss',function(){
    gulp.src('./css/style.scss')
    .pipe(concat('style.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./css'))
})
gulp.task('minifyjs',function(){
    gulp.src('./js/angular.min.js')
    .pipe(concat('angular.js'))
    .pipe(minifyJs())
    .pipe(gulp.dest('./js'))
})
gulp.task('webserver',function(){
    gulp.src('.')
    .pipe(webserver({
        host:"localhost",
        port:8080,
        middlewere:function(req,res,next){
        
        }
    }))
    
})

