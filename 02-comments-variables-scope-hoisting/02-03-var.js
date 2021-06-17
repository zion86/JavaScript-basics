'use strict';

// var keyword
// var always has global scope, var only inside function has local scope.

var userName = 'Alex';                         // 'Alex'
var userName = 'John';                         // 'John'
userName = 'Katty';                            // 'Katty'


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