var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')


gulp.task('dev', function () {
  nodemon({ script: 'js/server.js', ext: 'html js', ignore: ['node_modules/**'] })
    .on('restart', function () {
      console.log('restarted!')
    })
})