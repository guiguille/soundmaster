var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  bower = require('gulp-bower');



gulp.task('dev', function () {
  bower();
  nodemon({ script: 'js/server.js', ext: 'html js', ignore: ['node_modules/**'] })
    .on('restart', function () {
      console.log('restarted!')
    })
})