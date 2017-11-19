var gulp = require('gulp');
var uglify = require('gulp-uglify');




gulp.task("scripts", function() {
   gulp.src('app/js/**/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('app/js'));
});


// default

gulp.task("default", ["scripts"]);
