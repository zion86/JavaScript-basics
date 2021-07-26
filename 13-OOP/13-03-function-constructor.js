'use strict';

// ES5 function constructor

// function PascalCasing naming
function User(name, age) {
  // function constructor initialization
  /* this = {}; // (implicitly) */

  // function constructor private property
  let _isAdmin = false;

  // function constructor private method
  const _changeAdminPerission = function () {
    return _isAdmin = !_isAdmin;
  };

  // function constructor privileged method to call private method and change private property
  this.updatePermission = function () {
    // call private method to change private data
    _changeAdminPerission();
    console.log(`User changed admin permission to ${_isAdmin}`);
  };

  /* this.property = function argument */
  // function constructor public properties
  this.name = name;
  this.age = age;

  // function constructor static property
  User.id++;

  // // function-constructor method
  // this.getUserInfo = function () {
  //   console.log(`My name is ${this.name}, i'm ${this.age} yeasr old.`);
  // };

  /*
    return this; // (implicitly)
    or
    return {
      anotherProp: 'another value',
    }
  */
}

/*
  function F() {}

  initialization function prototype object
  after declaration all functions have reference to the 'protorype' property
  F.prototype: { constructor: F };
*/

/*
  by default 'prototype' has 'constructor' property with reference to this function
  F.prototype: { constructor: F };

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
    method1: function() {},
  };

  or add new prototype method to the existing F.prototype object without clearing constructor property

  F.prototype.method1 = function() {};
*/

// create function constructor method using prototype
User.prototype.getUserInfo = function () {
  return `My name is ${this.name}, i'm ${this.age} yeasr old.`;
};

// overriding method .toString() from Object.prototype.toString()
User.prototype.toString = function () {
  return `User data: ${this.name} ${this.age}`;
};

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

// read private property and method
/* private propery and method visible only inside function F() {} */
john._isAdmin;                      // undefined
john.updatePermission();            // 'User changed admin permission to true' indise User() {}
john.updatePermission();            // 'User changed admin permission to false' indise User() {}

// change or read property in Object inheritance, NOT in the prototype
john.role = 'back-end';             // 'back-end'
alex.role;                          // 'front-end'

// call public method
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


// function constructor inheritance
// --------------------------------

// create new function constructor
function Frontend(name, age, developer) {
  // inheritance from User Constructor
  // User.call(this, name, age);
  User.apply(this, arguments);

  this.developer = developer;
};

Frontend.prototype.framework = 'React.js';


// v1 - create new-based inheritance
// Frontend.prototype = new User();
// Frontend.prototype.constructor = Frontend;

// v2 - Object.create()
// Frontend.prototype = Object.create(User.prototype);
// Frontend.prototype.constructor = Frontend;

// v3 - manual __proto__ assigment
// Frontend.prototype.__proto__ = User.prototype;

// v4 - Object.setPrototypeOf(inheritanceProto, parentProto);
Object.setPrototypeOf(Frontend.prototype, User.prototype);

const eva = new Frontend('Eva', 5, 'frontend');
eva.framework;                      // 'React.js'

// read prototype property, method from User function constructor
eva.role;                           // 'front-end'
eva.getUserInfo();                  // 'My name is Eva, i'm 5 yeasr old.'
