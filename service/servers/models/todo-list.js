const db = require('./database.js');

var Todo = function() {};

Todo.prototype.getAll = function(callback) {
  const sql = 'select * from todo';
  var items = [];
  db.query(sql,function(err,results) {
    if(err) {
      callback(true);
      return ;
    }
    results.forEach((e) => {
      items.push(e.item);
    });
    callback(false,items);
  });
};

Todo.prototype.addItem = function(callback) {
  const sql = 'INSERT INTO todo(item) VALUES(?)';
  db.query(sql, [item], function(err, results) {
    if(err) {
      callback(true);
      return ;
    }
    callback(false, results);
  });
};

Todo.prototype.update = function(id, item, callback) {
  const sql = 'UPDATE todo SET item = ? WHERE id = ?';
  db.query(sql, [item, id], function(err, results) {
    if(err) {
      callback(true);
      return ;
    }
    callback(false, results);
  });
};

module.exports = Todo;
