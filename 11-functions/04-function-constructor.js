'use strict';

// ES 5 function Constructor
{
  // create function Constructor
  function User(name, id) {
    this.name = name;
    this.id = id;

    // global argument for all inheritance
    this.human = true;

    // create method inside function
    this.greating = function () {
      console.log(`Hello ${this.name}`);
    }
  };

  // create method for function Constructor
  User.prototype.exit = function () {
    console.log(`Bye ${this.name}`);
  };

  // create new Object inheritance from function Constructor
  const john = new User('John', 31);
  const alex = new User('Alex', 33);

  console.log('john: ', john); // john:  User { name: 'John', id: 31, human: true }
  console.log('alex: ', alex); // alex:  User { name: 'Alex', id: 33, human: true }

  // run Object method
  john.greating(); // Hello John
  john.exit(); // Bye John
}

{ // ES6 Class
  class User {
    constructor(name, id) {
      this.name = name;
      this.id = id;
      this.human = true;
    }

    // create class Methods
    greating() {
      console.log(`Hello ${this.name}`);
    }
    exit() {
      console.log(`Bye ${this.name}`);
    }
  };
}