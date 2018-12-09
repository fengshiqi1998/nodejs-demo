const TodoList = require('../models/todo.js');
var express = require('express');
var router = express.Router();
var todo = new TodoList();
var items = [];
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { items: items });
});

router.post('/',function(req,res) {
  /*
  if(req.body.item !== '') items.push(req.body.item);
  res.render('index',{items:items});
  */
  if(req.body.item !== '') {
    todo.addItem(req.body.item, function(err) {
      if(err) {
        console.log(err);
      }
    });
  }
  todo.getAll((err,items) => {
    if(err) {
      console.error(err);
      return ;
    }
    res.render('index',{items:items});
  });
});
module.exports = router;
