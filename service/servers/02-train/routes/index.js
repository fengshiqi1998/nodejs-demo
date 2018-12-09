var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var mail = '';
/* GET home page. */
router.get('/', function(req, res,/* next*/) {
  res.render('index', { title: 'Express' });
});
router.post('/',function(req,res) {
  res.header('Access-Control-Allow-Origin','*');
  mail = req.body.mail.toString('utf8');
  console.log(typeof mail);
  console.log(mail);
  let code = getCode();
  //mailOptions.to = mail;
  var mailOptions = {
    from:'SightApp<Sightapplication@foxmail.com>',
    to  : mail?mail:'512653808@qq.com',
    subject : '同学你好',
    html:'你好~~~ ' + code + ' 这是你的验证码,记得区分字母大小写呦~',
  };
  smtpTransport.sendMail(mailOptions,function(error, response){
    if(error){
      console.log(error);      
    }
    else{
      console.log('Message sent:'+response.message);      
    }
    smtpTransport.close();
  });
  res.send({matchCode:code});
});

var smtpTransport = nodemailer.createTransport({
  host: 'smtp.qq.com',
  secureConnection: false,
  port :465,
  auth:{
    user:'Sightapplication@foxmail.com',
    pass:'adptlffopphmeccb'  
  }
});

function getCode(){
  let n = 6;
  var all = '1234567890';
  var code = '';
  for (let i = 0; i < n ; i++){
    var index = Math.floor(Math.random() * 10);
    code += all.charAt(index);                
  }
  return code;
}
/*
var mailOptions = {
  from:'SightApp<Sightapplication@foxmail.com>',
  to  : '512653808@qq.com',
  subject : '同学你好',
  html:'你好~~~ ' + code + ' 这是你的验证码,记得区分字母大小写呦~',
};
*/
/*
//function sendEmail() {
smtpTransport.sendMail(mailOptions,function(error,response){
  if(error){
    console.log(error);      
  }else{
    console.log("Message sent:"+response.message);      
  }
  smtpTransport.close();
});
//}
*/
module.exports = router;
