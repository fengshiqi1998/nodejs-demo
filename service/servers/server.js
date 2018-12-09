#!/usr/bin/node

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod  };

};
Object.defineProperty(exports, "__esModule", { value: true  });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
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
      res.json(users);

});
app.get('/api', function (req, res) {
      res.json(users);

});
app.get('/api/users', function (req, res) {
      res.json(users);

});
app.listen(8080);
")"
