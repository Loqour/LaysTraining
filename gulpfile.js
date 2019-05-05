var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require('gulp-notify'),
	browserSync = require('browser-sync');


gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		tunnel: true, tunnel: "lays"
		// notify = false
	});
});

gulp.task('styles', function(){
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});


gulp.task('code', function(){
	return gulp.src('app/*.html')
		.pipe(browserSync.reload({stream: true }));
});

gulp.task('watch', function(){
	gulp.watch('app/sass/**/*.sass', gulp.parallel('styles'));
	gulp.watch('app/*.html', gulp.parallel('code'));
});

gulp.task('default', gulp.parallel('styles', 'browser-sync', 'watch'));