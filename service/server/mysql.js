#!/usr/bin/node
var config = require('./config.json');
var http = require('http');
/*
var con = require('mysql').createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ddd',
  database: 'todoList',

});
*/
var con = require('mysql').createPool(config);
var arr = [];

// database function
var todoList = function() {};

todoList.prototype.getAll = function(cb) {
  const sql = 'SELECT * FROM todo';
  var items = [];
  con.query(sql, function(err, results) => {
    if(err) {
      cb(true);
      return ;
    }
    results.forEach((e) => { items.push(e.item); });
    cb(false, items);
  });
}

todoList.prototype.addItem = function(item, cb) {
  const sql = 'INSERT INTO to (item) VALUES(?)';
  con.query(sql, [item], function(err,results) {
    if(err) {
      cb(true);
      return ;
    }
    cb(false, results);
  });
}

todoList.prototype.update = function(id, item, callback) {
  const sql = 'UPDATE todo SET item = ? WHERE id = ?';
  con.query(sql, [item, id], function(err, results) {
    if(err) {
      callback(true);
      return ;
    }
    callback(false, results);
  });
}

var todo = new todoList();



/*
var arry = [1,2,3];
http.createServer((req,res) => {
  console.log(req.headers);
  console.log();
  console.log(req.method);
  console.log();
  res.end(arry);
}).listen(8080);
*/
