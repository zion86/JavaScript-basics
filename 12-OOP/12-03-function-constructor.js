'use strict';

// ES5 function Constructor

{ // function Constructor
  function User(name, id) {
    // property
    this.name = name;
    this.id = id;

    // global argument for all inheritance
    this.human = true;

    // // method
    // this.greating = function () {
    //   console.log(`Hello ${this.name}`);
    // }
  }

  // create method for function constructor
  User.prototype.exit = function () {
    console.log(`Bye ${this.name}`);
  };

  // prototype property for all inheritance
  User.prototype.role = 'front-end';

  // create new Object inheritance from function Constructor
  const john = new User('John', 31);  // User { name: 'John', id: 31, human: true }
  const alex = new User('Alex', 33);  // User { name: 'Alex', id: 33, human: true }

  // change property in Object inheritance
  john.role = 'back-end';             // 'back-end'

  // call method
  // john.greating();                 // 'Hello John'
  john.exit();                        // 'Bye John'


  // // function constructor static property
  // User.human = 'Yes';

  // // function constructor static mathod
  // User.getName = function () {
  //   return User;
  // };


  // // create another function Constructor with inheritance
  // const Coder = function (param) {
  //   // inheritance from User Constructor
  //   User.apply(this, arguments);

  //   this.side = param.side;
  // };


  // // inheritance from parent constructor
  // Coder.prototype = Object.create(User.prototype);
  // Coder.prototype.constructor = User;
}


{ // ES6 Class
  class User {
    constructor(name, id) {
      this.name = name;
      this.id = id;
      this.human = true;
    }

    // create class methods
    greating() {
      console.log(`Hello ${this.name}`);
    }

    exit() {
      console.log(`Bye ${this.name}`);
    }
  };
}