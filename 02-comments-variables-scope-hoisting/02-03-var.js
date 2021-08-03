// var keyword
// var is always global variable, only inside function var is local variable


// global variable
var userName = 'Alex';                      // 'Alex'
var userName = 'John';                      // 'John'
userName = 'Katty';                         // 'Katty'

// 'window' is global object, var exist inside global object 'window' as object property
window.userName;                            // 'Katty'


// only inside functions var is local variable
function sayHello() {
  var name = 'Pitter';
  console.log(`Hello ${name}`);
}

sayHello();                                 // 'Hello Pitter'
console.log('name: ', name);                // ReferenceError: name is not defined


// inside loop var is global variable
for (var i = 0; i < 3; i++) {
  console.log(i);
}

// i from loop has global variable
console.log('var i from loop: ', i);        // return i = 4