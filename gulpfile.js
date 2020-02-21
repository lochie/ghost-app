var gulp = require('gulp');
var sass = require('gulp-sass');

//style paths
var src	= {
	css 	: 'src/scss/App.scss',
};
var dist = {
	css: 'src/css/',
};

gulp.task('sass', function(){
	return gulp.src(src.css)
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(gulp.dest( dist.css ));
});


gulp.task('watch', function(){
    
	var files = [ './**/*' ];
	gulp.watch(
		'src/scss/**/*.scss',
		gulp.series('sass')
	);

});


gulp.task('dev', gulp.series('sass'), function(){
});
gulp.task('default', gulp.series('sass'), function(){
});