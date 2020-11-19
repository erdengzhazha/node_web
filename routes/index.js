// 引入Express
var express = require('express');
// 引入Express router路由对象
var router = express.Router();

/* GET home page. 首页路由 */
router.get('/index?:id', function(req, res, next) {
  console.log(req.params) //只适合于restfull风格 例子 ： /index/:id
  console.log('这里是中间件');
  console.log(req.url)
  //query 只能获取get请求参数，其他的post, put请求不能获取
  console.log(req.query)
  console.log(req.query.id)
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

/**
 * restful风格
 */
router.get('/index/:id', function(req, res, next) {
  console.log(req.params)
  res.send((req.params))
})

// 定义一个GET请求"/world" 的路由，执行方法
router.get('/getWorld',function (req,res,next) {
  res.render('index',{title: 'Hello world！ get'})
})

// Post请求方式
router.post('/postWorld',function (req,res,next) {
  console.log(req.params)
  console.log(req.body)
  console.log(req.body.id)  //在返回前可以去直接解析json
 // res.render('index',{title : 'Hello world! post'});
  res.send(req.body)  //此我地方不可以直接解析json key
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
