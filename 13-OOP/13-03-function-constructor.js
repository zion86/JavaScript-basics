'use strict';

// ES5 function constructor

// function PascalCasing naming
function User(name, age) {
  // function constructor initialization
  /* this = {}; // (implicitly) */

  /* this.property = function argument */
  this.name = name;
  this.age = age;

  // function constructor property for all inheritances
  this.isAdmin = false;

  // function constructor static property
  User.id++;

  // // function-constructor method
  // this.getUserInfo = function () {
  //   console.log(`My name is ${this.name}, i'm ${this.age} yeasr old.`);
  // };

  /* return this; // (implicitly) */
}

/*
  function F() {}

  initialization function prototype object
  after declaration all functions have reference to the 'protorype' property
  F.prototype: { }
*/

/*
  by default 'prototype' has 'constructor' property with reference to this function
  F.prototype: { constructor: F }

  F.   <=======================
    prototype. (__proto__) <==|========
      method1: function() {}  |   |   |
      method2: function() {}  |   |   |
      constructor: F   =======>   |   |
        prototype. (__proto__)    |   |
          new obj1()   ===========>   |
          new obj2()   ===============>
*/

/*
  // reassignment F.prototype object with constructor property
  F.prototype = {
    constructor: F,
    method1: function(x) {
      return x;
    },
  }

  or add new prototype method to the existing F.prototype object without clearing constructor property

  F.prototype.method1 = function(x) {
    return x;
  }
*/

// create function constructor method using prototype
User.prototype.getUserInfo = function () {
  return `My name is ${this.name}, i'm ${this.age} yeasr old.`;
}

// reassing method .toString() from Object.prototype
User.prototype.toString = function () {
  return `User data: ${this.name} ${this.age}`;
}

// function constructor prototype property for all inheritance
User.prototype.role = 'front-end';

// function constructor static property
User.id = 0;

// function constructor static method
User.currentUserId = function () {
  return `Current ID: ${this.id}`;
};


// operator 'new' create empty Object {}
// create new Object inheritance from function constructor
const john = new User('John', 31);  // User { name: "John", age: 31, isAdmin: false }
const alex = new User('Alex', 33);  // User { name: "Alex", age: 33, isAdmin: false }

// change or read property in Object inheritance
john.role = 'back-end';             // 'back-end'
john.isAdmin = true;                // true
alex.role;                          // 'front-end'
alex.isAdmin;                       // false

// call methods
john.getUserInfo();                 // 'My name is John, i'm 31 yeasr old.'
john.toString();                    // 'User data: John 31'

// call static method
User.currentUserId();               // 2

john.constructor;                   // reference to the function constructor User() { }
alex.constructor;                   // reference to the function constructor User() { }


// object_instance
//    prototype ( __proto__ )
//      F
//        prototype ( __proto__ )
//          Object
//            prototype ( __proto__ )
//              null


/*
  // create function Constructor with inheritance
  function Coder(param) {
    // inheritance from User Constructor
    User.apply(this, arguments);

    this.side = param.side;
  };

  // inheritance from parent constructor
  Coder.prototype = Object.create(User.prototype);
  Coder.prototype.constructor = User;
*/