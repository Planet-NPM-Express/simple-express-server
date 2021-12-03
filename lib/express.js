'use strict';

let test1 = require('simple-express-server-1239');

let test2 = require('../index.js');
// console.log(test1(3000));

// Testing

let newTest = new test1();

newTest.startServer(3000, 'DIZ BE EXPRESS')
// newTest.postServer('Food', 'Data you want to post to food route')
