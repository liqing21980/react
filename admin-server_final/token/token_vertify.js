/*
 * @Author: your name
 * @Date: 2021-05-27 08:53:26
 * @LastEditTime: 2021-05-28 10:49:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-server_final\token\token_vertify.js
 */
/*
 * @Author: your name
 * @Date: 2021-05-26 14:28:09
 * @LastEditTime: 2021-05-26 14:28:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-express-mongodb-master\token_vertify.js
 */
var jwt = require('jsonwebtoken');
var signkey = 'mes_qdhd_mobile_xhykjyxgs';

exports.setToken = function (username, userid) {
  return new Promise((resolve, reject) => {
    const token = 'Bearer ' + jwt.sign({
      name: username,
      _id: userid
    }, signkey, { expiresIn: 60 * 60 });//有效期30分钟 expiresIn : 表示有效期  不带单位默认为秒  如带单位如: "2 days", "10h", "7d"
    resolve(token);
  })
}

exports.verToken = function (token) {
  return new Promise((resolve, reject) => {
    var info = jwt.verify(token.split(' ')[1], signkey, (error, res) => {
      var data = {}; // 通过回调函数自定义返回信息，不然默认是创建token时传进去的obj和时间信息，这里加上状态码这些
      if (error) {
        data.code = '001'; // 自个定义失败码
        data.msg = 'token验证失败';
        data.obj = error; // 存失败信息，比如过期等
      } else {
        data.code = '000';
        data.msg = 'token验证成功';
        data.obj = res;
      }
      return data;
    });
    // console.log('token_vertify.js  verToken------', info)
    resolve(info);
  })
}