var express = require('express');
var router = express.Router();
const Todo = require('../models/todo-list.js');
var todo = new Todo();
/* GET home page. */
router.get('/', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'text/plain; charset = "utf-8"');
  todo.getAll((err,items) => {
    if(err) {
      console.error(err);
      return ;
    }
    res.status(200).json(items);
  });
});

router.post('/', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  console.log(req.body);
  if(req.body !== '') {
    todo.addItem(req.body, (err) => {
      if(err) {
        console.error(err);
        res.status(500).send('database error!');
      } else {
        res.status(200).send('okay!');
      }
    });
  }
});

module.exports = router;
