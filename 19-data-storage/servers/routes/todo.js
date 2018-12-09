const TodoList = require('../models/todo.js');
var express = require('express');
var router = express.Router();
var todo = new TodoList();
//var items = [];
/* GET home page. */
router.get('/', function(req, res) {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset="utf-8"');
  todo.getAll((err, items) => {
    if(err) {
      console.error(err);
      return ;
    }
    res.status(200).json(items);
  });
  //res.render('index', { items: items });
});

router.post('/',function(req,res) {
  res.header('Access-Control-Allow-Origin','*');
  console.log(req.body);
  if(req.body.item !== '') {
    todo.addItem(req.body, function(err) {
      if(err) {
        //console.log(err);
        console.error(err);
        res.status(500).send('DB error!');
      } else {
        res.status(200).send('OK!');
      }
    });
  }
  /*
  todo.getAll((err,items) => {
    if(err) {
      console.error(err);
      return ;
    }
    res.render('index',{items:items});
  });
  */
});
module.exports = router;
