#!/usr/bin/node

const http = require('http'),
      cheerio = require('cheerio');

var addr = 'http://edu.51cto.com/courselist/index-zh5-p1.html';

http.get(addr,(res)=>{
  console.log(`${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);// 起始行
  console.log(res.headers);// 响应头
  console.log();

  res.pipe(process.stdout);// 获取响应体
  var html = '';
  res.on('data',(data)=>{//得到数据
    html += data;
  });
  res.on('end',()=>{//解析数据
    var $ = cheerio.load(html);
    $('body').find('div.main').each(function(){
      var cName = $(this).find('a').text(),
          cTime = $(this).find('p.fl').text(),
          cTarget = $(this).find('div.course_target').text(),
          cURL = $(this).find('a').attr('href');
      if(cTime === ''){ return; }
        console.log('课程名称：',cName.trim());
        console.log('课程时长：',cTime.trim());
        console.log('课程目标：',cTarget.trim());
        console.log('课程地址：',cURL.trim());
        console.log();
    });
  });

});
