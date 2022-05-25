const gulp = require('gulp'),
      gulpWatch = require('gulp-watch'),      // 监听插件
      gulpConnect = require('gulp-connect')   // 服务器插件

// 监听
gulp.task('watch', function () {
  gulp.watch('src/index.html', ['html'])
})

// 监听html变化
gulp.task('html', function () {
  gulp.src('src/*.html')
    .pipe(gulpConnect.reload())
});

// 服务器
gulp.task('connect', function () {
  var serverConfig = {
    root: 'src',    // 从哪个目录开启server
    port: 8080,        // 将服务开启在哪个端口
    livereload: true    // 是否热更新
  }
  gulpConnect.server(serverConfig)
})

gulp.task("watching", ['connect', 'watch'])
