const gulp = require('gulp'),
  lp = require('gulp-load-plugins')() //改变前缀
  , concat = lp.concat //合并js到一个js文件
  , minifyCSS = lp.minifyCss //css压缩
  , minify = lp.minify //整合 js 
  , zip = lp.zip       //解压
  , htmlmin = lp.htmlmin               //html压缩
  , autoPrefixer = lp.autoprefixer     //添加前缀
  , imagemin = lp.imagemin      //图片压缩
  , pngquant = require('imagemin-pngquant')     //图片压缩拓展包  
  , inject = lp.inject          //添加文件路径
  , cache = lp.cache            //图片改变时才开始操作
  , rev = lp.revAppend          //添加版本号
  , runSequence = lp.runSequence     //分批处理命令
  , eslint = lp.eslint          //代码风格校验  jshint
  , watch = lp.watch            //监视页面变化
  , rename = lp.rename          //重命名文件
  , notify = lp.notify          //加提示信息
  , clean = lp.clean
  , connect = lp.connect
  , stylus = lp.stylus
  , babel = lp.babel            // es6 转 es5
  , env = lp.env
  , gulpif = lp.if
  , minimist = require('minimist')
  , lujin = 'imgUploader'

var knownOptions = {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'production' }
};

var options = minimist(process.argv.slice(2), knownOptions);

console.log(options);

var serverPort = 'src/' + lujin + '/',
  htmlSource = 'src/' + lujin + '/*.html',
  htmlTarget = 'dist/' + lujin,
  cssSource = './src/' + lujin + '/css/*.css',
  cssTarget = './dist/' + lujin + '/css/',
  stylusSource = './src/' + lujin + '/styl/*.styl',
  stylusTarget = 'src/' + lujin + '/css',
  jsSource = 'src/' + lujin + '/js/*.js',
  jsTarget = './dist/' + lujin + '/js/',
  imgSource = './src/' + lujin + '/img/*',
  imgTarget = './dist/' + lujin + '/img/'

var target = gulp.src('./dist/index.html'),
  sources = gulp.src(['./dist/js/*.js'])


gulp.task('scripts', function () {
  return gulp.src('test.js')
    .pipe(gulpif(options.env === 'production', minify())) // 仅在生产环境时候进行压缩
    .pipe(gulp.dest('dist'));
});

// 文件路径
gulp.task('inject', function () {
  var target = gulp.src('./src/alipayActive/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./src/alipayActive/js/*.js', './src/alipayActive/css/*.css'], {
    read: false
  });

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./dist'));

})

// html文件处理
gulp.task('testHtml', function () {
  var options = {
    removeComments: true,  //清除注释
    collapseWhitespace: false,  //压缩html
    collapseBooleanAttributes: true, //省略布尔属性的值
    removeEmptyAttributes: true,  //删除所有空格作为属性值
    removeScriptTypeAttributes: true,  //删除script的type属性
    removeStyleLinkTypeAttributes: true,  //删除style的type属性
    minifyJS: false,  //压缩js
    minifyCSS: true  //压缩css
  }
  gulp.src(htmlSource)
    .pipe(htmlmin(options))
    .pipe(rev())
    .pipe(gulp.dest(htmlTarget))
})

// 压缩js
gulp.task('compress', function (cb) {
  gulp.src(jsSource)
    // .pipe(concat('main.js'))    //合并js
    // .pipe(rename({ suffix: '.min' }))
    // .pipe(gulp.dest(jsTarget))
    .pipe(babel())
    // // 方案一
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js'
      },
      exclude: ['tasks'],
      ignoreFiles: ['.combo.js', '.min.js']
    }))
    .pipe(gulp.dest(jsTarget))
    .pipe(notify({ message: 'js is complite!' }))
})

// 压缩css,加前缀
/*!
   保留注释的格式
*/

gulp.task('stylus', function () {
  gulp.src(stylusSource)
    .pipe(stylus())
    .pipe(gulp.dest(stylusTarget))
    .pipe(connect.reload());
});

gulp.task('minicss', function () {
  var opt = {
    advanced: true,   //是否开启高级优化，合并选择器啥的
    keepSpecialComments: "*",  //保留所有特殊前缀
    keepBreaks: false,   //是否保留换行
    removeEmpty: false,  // 是否删除空格
    compatibility: "*"   //启用兼容模式，’*‘是ie9以下，’ie7‘，’ie8‘可选   
  }
  gulp.src(cssSource)
    .pipe(autoPrefixer({
      browsers: ['last 2 versions'],  //兼容的限度
      cascade: true  //是否美化属性值
    }))
    .pipe(gulp.dest(cssTarget))
    .pipe(minifyCSS(opt))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(cssTarget))
    .pipe(notify({ message: 'css is complete!' }))
})

// 压缩包
gulp.task('zip', () => {
  gulp.src('src/*')
    .pipe(zip('project.zip'))
    .pipe(gulp.dest(htmlTarget))
})

// 图片压缩
gulp.task('testImagemin', function () {
  // 将你默认的任务代码放在这
  var opt = {
    optimizationLevel: 3, //优化等级
    progressive: false,    //无损压缩
    interlaced: false,     //隔行扫描gif渲染
    multipass: false,      //多次优化svg，直到完全优化
    use: [pngquant()]     //使用pngquant深度压缩
  }
  gulp.src(imgSource)
    .pipe(imagemin(opt))
    .pipe(gulp.dest(imgTarget))
    .pipe(notify({ message: 'image is complete!' }))
})

// 清除
gulp.task('clean', function () {
  return gulp.src([htmlTarget, cssTarget, jsTarget, imgTarget], { read: false })
    .pipe(clean())
})

// 监控
gulp.task('watch', function () {
  gulp.watch(htmlSource, ['html'])
  gulp.watch(stylusSource, ['stylus'])
  gulp.watch(jsSource, ['html'])
})
// 服务器
gulp.task('connect', function () {
  var serverConfig = {
    root: serverPort,    //从哪个目录开启server
    port: 8080,          //将服务开启在哪个端口
    livereload: true
  }
  connect.server(serverConfig)
})
gulp.task('html', function () {
  gulp.src(htmlSource)
    .pipe(connect.reload());
});

// *执行命令*
gulp.task("watching", ['connect', 'watch']);

gulp.task("default", function (cb) {
  runSequence(
    'clean',
    ['testHtml', 'compress', 'minicss', 'testImagemin'],
    cb
  )
})
