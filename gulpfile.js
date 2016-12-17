var gulp         = require('gulp'),
	less         = require('gulp-less'),
	watch        = require('gulp-watch'),
	cleanCSS     = require('gulp-clean-css'),
	concat       = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('compile-less', function() {
	gulp.src('./layout/less/style.less')
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['last 5 versions'],
			cascade: false
		}))
		// .pipe(cleanCSS({advanced : false}))
		.pipe(gulp.dest('./layout/css/'));
});

gulp.task('watch-less', function() {  
	gulp.watch('./layout/less/*.less', ['compile-less']);
});

gulp.task('default', ['compile-less', 'watch-less'] );