#!/usr/bin/node

'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { 'default': mod  };

};
Object.defineProperty(exports, '__esModule', { value: true  });
var express_1 = __importDefault(require('express'));
var body_parser_1 = __importDefault(require('body-parser'));
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false  }));
app.use(body_parser_1.default.json());
var user = /** @class */ (function () {
  function user(name, psw) {
    this.name = name;
    this.psw = psw;                    
  }
  return user;
}());
var users = [
  new user('fsq', '111111')
];
app.get('/', function (req, res) {
  console.log('GET body:', req.body);
  res.json(users);
});
app.get('/api', function (req, res) {
  res.json(users);
});
app.get('/api/users', function (req, res) {
  console.log('GET body:', req.body);
  res.json(users);
});
app.post('/api/users', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  console.log(req.query);
  console.log(req.body);
  var name = req.body.name;
  var psw = req.body.psw;
  for (var i = 0; i < users.length; i++) {
    if (users[i].name == name && users[i].psw == psw) {
      res.json(true);
      return;                                                    
    }                        
  }
  res.json(false);
});
app.listen(8080);

