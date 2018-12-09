#!/usr/bin/node

const mysql = require('mysql');

const con = mysql.createConnection({//创建连接
  host:'localhost',//主机
  user:'root',//用户名
  password:'ddd',//密码
  database:'test'//数据库
});

con.connect();//连接

//operation db
/*
 * 查
const sql = 'select * from books where book_id = ?';
con.query(sql, [100], function(err,result){
  if(err) {
    console.error(err);
    process.exit(100);
  }
  console.log(result);
});
*/
/*增
const sql = 'insert into books(book_id,title,status) values(?,?,?)';
con.query(sql,[2,'Node.js实战',0],function(err,result){
  if(err) {
    console.error(err);
    process.exit(100);
  }
  console.log(result);
});
*/
/*改
const sql = 'update books set title = ? where book_id = ?';
con.query(sql,['MySQL Programming',2],function(err,result){
  if(err) {
    console.error(err);
    process.exit(100);
  }
  console.log(result);

});
*/
/*删
const sql = 'delete from books where book_id = ?';
con.query(sql,[2],function(err,result){
  if(err) {
    console.error(err);
    process.exit(100);
  }
  console.log(result);

});
*/
con.end();//关闭连接
