var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync =require('browser-sync');

gulp.task("default", function() {
    gulp.watch("./scss/**.scss", function(){
        gulp.src("./scss/**.scss")
            .pipe(sass({outputStyle: 'expanded'}))
            .pipe(gulp.dest("./css/"));
    });

    browserSync({
        server: {
                baseDir: "./"
            ,index  : "index.html"
        }
    });
    gulp.task('bs-reload', function () {
        browserSync.reload();
    });
    gulp.watch("./*.html", ['bs-reload']);
    gulp.watch("./css/*.css", ['bs-reload']);

});