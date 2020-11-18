// 引入Express
var express = require('express');
// 引入Express router路由对象
var router = express.Router();

/* GET home page. 首页路由 */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index',{title:'Hello'})
});

// 定义一个GET请求"/world" 的路由，执行方法
router.get('/world',function (req,res,next) {
  res.render('index',{title: 'Hello world！'})
})


// 导出路由
module.exports = router;
