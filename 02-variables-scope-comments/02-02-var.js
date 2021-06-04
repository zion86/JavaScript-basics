'use strict';

// var always has global scope, var only inside function has local scope.

var name = 'Alex';                         // 'Alex'
var name = 'John';                         // 'John'

// only inside functions var has local scope
function sayHello() {
  var name = 'Pitter';
  console.log(`Hello ${name}`);
}
// console.log('name: ', name);            // ReferenceError: name is not defined


for (var i = 0; i < 3; i++) {
  console.log(i);
}
// i from loop has global scope
console.log('var i from loop: ', i);       // return i = 4