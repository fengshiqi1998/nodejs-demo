#!/usr/bin/node

const user = {
  name: 'wangding',
  age: 41,
  qq: '123456'
};


const log = console.log;

// method 1 占位符
log('name: %s',user.name);
log('age: %d',user.age);
log('user: %j',user);
log('qq: %s',user.qq);



//join 拼接
log('qq:'+user.qq);

// template 模板字符串
log(`qq:${user.qq}`);

console.error('error message!');
