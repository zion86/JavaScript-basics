'use strict';

// ES5 function-constructor

// function PascalCasing naming
function User(name, id) {
  // function constructor initialization
  // this = {}

  // this.property = function argument
  this.name = name;
  this.id = id;

  // global argument for all inheritance
  this.human = true;

  // // function method
  // this.greating = function () {
  //   console.log(`Hello ${this.name}`);
  // }

  // return this;
}

// create method for function-constructor using prototype
User.prototype.exit = function () {
  console.log(`Bye ${this.name}`);
};

// reassing method .toString() from Object
User.prototype.toString = function () {
  return `User data: ${this.id} ${this.name}`;
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
const john = new User('John', 31);  // User { name: 'John', id: 31, human: true }
const alex = new User('Alex', 33);  // User { name: 'Alex', id: 33, human: true }

// change property in Object inheritance
john.role = 'back-end';             // 'back-end'

// call method
// john.greating();                 // 'Hello John'
john.exit();                        // 'Bye John'



// create function Constructor with inheritance
function Coder(param) {
  // inheritance from User Constructor
  User.apply(this, arguments);

  this.side = param.side;
};

// inheritance from parent constructor
Coder.prototype = Object.create(User.prototype);
Coder.prototype.constructor = User;