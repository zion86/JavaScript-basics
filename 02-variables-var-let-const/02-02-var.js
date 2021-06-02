'use strict';

{ // local scope
  var globalVarInLocalScope = 'global variable in local scope';
}

// var can read from local scope
console.log('globalVarInLocalScope: ', globalVarInLocalScope);
// globalVarInLocalScope:  global variable in local scope


// only inside functions var has local scope
function sayHello() {
  var name = 'Pitter';
  console.log(`Hello ${name}`);
};

// console.log('name: ', name);            // ReferenceError: name is not defined


for (var i = 0; i < 3; i++) {
  console.log(i);
}

// i from loop has global scope
console.log('var i from loop: ', i);