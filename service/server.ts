#!/usr/bin/node

import express from 'express';
import bodyParser from 'body-parser'
const app = express();
app.use(bodyParser.urlencoded({ extended: false  }));
app.use(bodyParser.json());

class user {
constructor (
  public name: string,
  public psw: string                  
  ){}
}
const users = [
  new user('fsq','111111')
];
app.get('/',(req,res) => {
  console.log('GET body:',req.body);
  res.json(users);
});
app.get('/api',(req,res) => {
  res.json(users);
});
app.get('/api/users',(req,res)=>{
  console.log('GET body:',req.body);
  res.json(users);
});
app.post('/api/users',(req,res) =>{
  res.header('Access-Control-Allow-Origin', '*');
  console.log(req.query);
  console.log(req.body);
  let name = req.body.name;
  let psw = req.body.psw;
  for(let i = 0;i<users.length;i++) {
    if(users[i].name == name && users[i].psw == psw) {
      res.json(true);
      return ;
    }
  }
  res.json(false);
});
app.listen(8080);
