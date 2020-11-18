// 引入Express
var express = require('express');
// 引入Express router路由对象
var router = express.Router();

/* GET home page. 首页路由 */
router.get('/', function(req, res, next) {
  console.log('这里是中间件');
  //继续下一个中间件
  next();
},function (req,res,next) {
  res.render('index',
      {title:'Hello',
            name: 'XiuEr',
            age : '30',
            list: [
              {id:1,price:1.02},
              {id:2,price:2.22},
              {id:3,price:3.22},
              {id:4,price:4.12}
            ]

      })
});

// 定义一个GET请求"/world" 的路由，执行方法
router.get('/getWorld',function (req,res,next) {
  res.render('index',{title: 'Hello world！ get'})
})

// Post请求方式
router.post('/postWorld',function (req,res,next) {
  res.render('index',{title : 'Hello world! post'});
})

// Put请求方式
router.put('/putWorld',function (req,res,next) {
  res.render('index',{title : 'Hello world! put'})

})

// Delete请求方式
router.delete('/deleteWorld',function (req,res,next) {
  res.render('index',{title : 'Hello world! delete'})

})

// 导出路由
module.exports = router;
