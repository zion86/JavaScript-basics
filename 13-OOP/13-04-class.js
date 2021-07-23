'use strict';

// class constructor can't call without 'new' keyword
// class not support 'hoisting'
// class methods not support for...in loop
// class always run in 'use strict' mode

{ // ES6 Class declaration (superClass)

  /* class not support 'hoisting' */
  // const conor = new User('Conor', 21);  // ReferenceError: Cannot access 'User' before initialization

  // class PascalCasing naming
  class User {
    // function constructor initialization
    /* 
      invoke after creating new Object using notation new User()
      new User('Alex', 32);
    */
    constructor(name, age) {
      /* this = {}; // (implicitly) */

      // class closed property
      this._isAdmin = false;

      /* this.property = function argument */
      this.name = name;
      this.age = age;

      /* return this; // (implicitly) */
    }

    // class getter is a syntax to bind class property with class mwthod
    get isAdmin() {
      console.log(`reading isAdmin permission: ${this._isAdmin}`);
      return this._isAdmin;
    }

    set isAdmin(value) {
      console.log(`changing isAdmin permission`);
      return this._isAdmin = value;
    }

    // create class method
    /* User.prototype.getUserInfo */
    getUserInfo() {
      return `My name is ${this.name}, i'm ${this.age} yeasr old.`;
    }

    // reassing method .toString() from Object.prototype
    /* User.prototype.toString */
    toString() {
      return `User data: ${this.name} ${this.age}`;
    }
  }


  // operator 'new' create empty Object {}
  // create new Object inheritance from function constructor
  const john = new User('John', 31);  // User { name: "John", age: 31 }
  const alex = new User('Alex', 33);  // User { name: "Alex", age: 33 }


  // call class getter, setter
  /*
    calling getter as reading class property
    john.isAdmin; NOT john.isAdmin();
    calling setter assignment class property
    john.isAdmin = true;

  */
  // john.isAdmin()                   // TypeError: john.isAdmin is not a function
  john.isAdmin;                       // 'reading isAdmin class closed property: false'
  john.isAdmin = true;                // 'changing isAdmin permission: false'
  john.isAdmin;                       // 'reading isAdmin permission: true'


  // call public, private methods
  john.getUserInfo();                 // 'My name is John, i'm 31 yeasr old.'
  john.toString();                    // 'User data: John 31'
}



{ // ES6 class expression
  const User = class {

    // create constructor function
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    // create class method
    getUserInfo() {
      return `My name is ${this.name}, i'm ${this.age} yeasr old.`;
    }
  };

  const john = new User('John', 31);  // User { name: "John", age: 31 }
}



/*

// extend superClass with new subClass
class ColoredRectangleWithText extends User {

  // create constructor
  constructor(height, width, text, bgColor) {   // extend arguments
    super(height, width);                       // inheritance arguments from superClass

    this.text = text;
    this.bgColor = bgColor;
  }

  // create class method
  showMyProps() {
    console.log(`text: ${this.text}, bgColor: ${this.bgColor}`);
  }
};

// create new Object copy from supreClass
const square = new User(10, 10);
square.calcArea();

// create new Object copy from extended subClass
const longRegtangle = new ColoredRectangleWithText(10, 100, 'Long Regtangle', 'green');
longRegtangle.showMyProps();          // text: Long Regtangle, bgColor: green
longRegtangle.calcArea();             // 1000





{ // experimental
  class Counter {
    count = 0;

    increment = () => {
      this.count += Counter.incrementStep;
    }

    static incrementStep = 2;

    static incrementAll = function (arr) {
      arr.forEach((c) => c.increment());
    }
  }

  // work example
  class Counter {
    constructor() {
      this.count = 0;
      this.increment = () => {
        this.count += Counter.incrementStep;
      }
    }
  }

  // create static property
  Counter.incrementStep = 2;

  // create static method
  Counter.incrementAll = function (arr) {
    arr.forEach((c) => c.increment());
  }
}

*/