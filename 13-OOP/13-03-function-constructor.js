'use strict';

// ES5 function-constructor

// function PascalCasing naming
function User(name, age) {
  // function constructor initialization
  /* this = {}; // (implicitly) */

  /* this.property = function argument */
  this.name = name;
  this.age = age;

  // global argument for all inheritance
  this.isAdmin = false;

  // // function-constructor method
  // this.getUserInfo = function () {
  //   console.log(`My name is ${this.name}, i'm ${this.age} yeasr old.`);
  // };

  /* return this; // (implicitly) */
}

// create function-constructor method using prototype
User.prototype.getUserInfo = function () {
  return `My name is ${this.name}, i'm ${this.age} yeasr old.`;
}

// reassing method .toString() from Object
User.prototype.toString = function () {
  return `User data: ${this.name} ${this.age}`;
}

// prototype property for all inheritance
User.prototype.role = 'front-end';

// // function constructor static property
// User.human = 'Yes';

// // function constructor static mathod
// User.getName = function () {
//   return User;
// };


// operator 'new' create empty Object {}
// create new Object inheritance from function Constructor
const john = new User('John', 31);  // User { name: "John", age: 31, isAdmin: false }
const alex = new User('Alex', 33);  // User { name: "Alex", age: 33, isAdmin: false }

// change property in Object inheritance
john.role = 'back-end';             // 'back-end'
alex.role;                          // 'front-end'

// call methods
john.getUserInfo();                 // 'My name is John, i'm 31 yeasr old.'
john.toString();                    // 'User data: John 31'



// create function Constructor with inheritance
function Coder(param) {
  // inheritance from User Constructor
  User.apply(this, arguments);

  this.side = param.side;
};

// inheritance from parent constructor
Coder.prototype = Object.create(User.prototype);
Coder.prototype.constructor = User;