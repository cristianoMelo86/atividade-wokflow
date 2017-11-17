var gulp = require("gulp");
var scss = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');


// TASK Minify HTML
gulp.task('minify', function() {
  return gulp.src('./source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'));
});

// TASK SCSS e Minify CSS
gulp.task('scss', function(){
    return gulp.src('./source/scss/*.scss')
        .pipe(scss())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css/'));
});

//TASK Minify CSS
gulp.task('cleanCSS', function(){
	return gulp.src("./dist/css/*.css")
		   .pipe(cleanCSS())
		   .pipe(gulp.dest("./dist/css/"));
});

// TASK Mover arquivo
gulp.task('move-css', function(){
	return gulp.src("./source/scss/*.scss")
		   .pipe(gulp.dest("./dist/css/"));
});


//TASK Monitorar arquivo
gulp.task('background', function(){
	gulp.watch('./source/scss/*.scss', ['scss']);
	gulp.watch('./source/*.html', ['minify']);
});


