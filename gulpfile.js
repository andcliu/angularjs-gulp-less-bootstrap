var gulp = require('gulp')
	less = require('gulp-less')

	// minify js
	uglify = require('gulp-uglify')

	//plumber keeps gulp running when errors
	plumber = require('gulp-plumber')

	// self explanatory
	livereload = require('gulp-livereload')

	// image minification
	imagemin = require('gulp-imagemin')

	// browser prefixers
	prefix = require('gulp-autoprefixer');


// uglifies js
gulp.task('scripts', function(){
	gulp.src('client/js/*.js')
		.pipe(plumber())
		.pipe(uglify())
		// .on('error', errorLog)
		.pipe(gulp.dest('client/js'))
		.pipe(livereload());
});

// compress images
gulp.task('image', function(){
	gulp.src('client/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('client/images'));
});

// converting less to css
gulp.task('styles', function(){
	gulp.src('client/css/*.less')
		.pipe(plumber())
		.pipe(less({
			style: 'expanded'
		}))
		// .on('error', errorLog)
		.pipe(prefix('last 2 versions'))
		.pipe(gulp.dest('client/css'))
		.pipe(livereload());
});

// watching for file change
gulp.task('watch', function(){
	var server = livereload();
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('client/css/*.less', ['styles'])
});

gulp.task('default',['scripts','styles', 'watch']);

