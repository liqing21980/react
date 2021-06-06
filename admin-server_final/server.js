/*
应用的启动模块
1. 通过express启动服务器
2. 通过mongoose连接数据库
  说明: 只有当连接上数据库后才去启动服务器
3. 使用中间件
 */
const mongoose = require('mongoose')
const express = require('express')
const app = express() // 产生应用对象

var vertoken = require('./token/token_vertify');
var expressJwt = require('express-jwt');

// 解析token获取用户信息
app.use(function (req, res, next) {
  var token = req.headers['authorization'];
  if (token == undefined) {
    return next();
  } else {
    vertoken.verToken(token).then((data) => {
      req.data = data;
      return next();
    }).catch((error) => {
      return next();
    })
  }
});


//验证token是否过期并规定哪些路由不用验证
app.use(expressJwt({
  secret: 'mes_qdhd_mobile_xhykjyxgs',// 密匙
  algorithms: ['HS256'],
  credentialsRequired: true
}).unless({
  path: ['/login', '/manage/img/upload', '/upload/']//除了这个地址，其他的URL都需要验证
}));


//当token失效返回提示信息
app.use(function (err, req, res, next) {
  if (err.status == 401) {
    return res.status(401).send('token失效');
  }
});
// 声明使用静态中间件
app.use(express.static('public'))
// 声明使用解析post请求的中间件
app.use(express.urlencoded({ extended: true })) // 请求体参数是: name=tom&pwd=123
app.use(express.json()) // 请求体参数是json结构: {name: tom, pwd: 123}
// 声明使用解析cookie数据的中间件
const cookieParser = require('cookie-parser')
app.use(cookieParser())
// 声明使用路由器中间件
const indexRouter = require('./routers')
app.use('/', indexRouter)  //

const fs = require('fs')

// 必须在路由器中间之后声明使用
/*app.use((req, res) => {
  fs.readFile(__dirname + '/public/index.html', (err, data)=>{
    if(err){
      console.log(err)
      res.send('后台错误')
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
      });
      res.end(data)
    }
  })
})*/
// 得到路由器对象
const router = express.Router()
// console.log('router', router)

// 指定需要过滤的属性
const filter = { password: 0, __v: 0 }
//当token失效返回提示信息
app.use(function (err, req, res, next) {
  if (err.status == 401) {
    return res.status(401).send('token失效');
  }
});

// 通过mongoose连接数据库
mongoose.connect('mongodb://localhost/server_db2', { useNewUrlParser: true })
  .then(() => {
    console.log('连接数据库成功!!!')
    // 只有当连接上数据库后才去启动服务器
    app.listen('4000', () => {
      console.log('服务器启动成功, 请访问: http://localhost:4000')
    })
  })
  .catch(error => {
    console.error('连接数据库失败', error)
  })

