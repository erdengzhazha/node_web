// http错误处理模块
var createError = require('http-errors');
// 引入Express
var express = require('express');
// 引入path
var path = require('path');
// 引入cookie处理对象
var cookieParser = require('cookie-parser');
// 引入日志模块
var logger = require('morgan');



// 引入路由目录中的index.js文件
var indexRouter = require('./routes/index');
// 引入路由目录中的users.js文件
var usersRouter = require('./routes/users');




// 创建Express应用
var app = express();


// view engine setup 查看引擎设置

// 定义页面目录
app.set('views', path.join(__dirname, 'views'));
// 定义页面模板引擎 jade ,pug ...
app.set('view engine', 'pug');
// 定义日志打印级别  dev ,debug
app.use(logger('debug'));
// 定义json格式处理数据
app.use(express.json());
// 定义使用urlencode处理数据及querystring模块解析数据
app.use(express.urlencoded({ extended: false }));
// 定义使用cookie处理对象
app.use(cookieParser());
// 定义静态资源目录public
app.use(express.static(path.join(__dirname, 'public')));

// 定义指向index.js的路由
app.use('/', indexRouter);
// 定义指向users.js的路由
app.use('/users', usersRouter);

// catch 404 and forward to error handler 定义404错误处理
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler 定义其他错误处理
app.use(function(err, req, res, next) {
  // set locals, only providing error in development 设置locals ，只在开发环境生效
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page 渲染错误页面
  res.status(err.status || 500);
  res.render('error'); //渲染
});

module.exports = app;
