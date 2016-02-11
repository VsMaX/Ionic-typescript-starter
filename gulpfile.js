var gulp = require('gulp');
var typescript = require('gulp-typescript');
var tsProject = typescript.createProject('tsconfig.json');

var paths =  {
	sass: ['./scss/**/*.scss'],
	src: ['./src/*.ts']
};


gulp.task('compile', function() {
	var tsResult = tsProject.src()
	.pipe(typescript(tsProject));

	return tsResult.js.pipe(gulp.dest('www/js'));
});
