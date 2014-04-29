var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  jshint = require('gulp-jshint'),
  bower = require('gulp-bower'),
  stylish = require('jshint-stylish');


gulp.task('lint', function () {
  gulp.src(['js/*.js','public/js/*.js'],{base: '.'})
  	.pipe(jshint())
    .pipe(jshint.reporter(stylish));
})


gulp.task('dev', function () {
  bower();
  nodemon({ script: 'js/server.js', ext: 'html js', ignore: ['node_modules/**'] })
    .on('change', ['lint'])
    .on('restart', function () {
      console.log('restarted!')
    })
})