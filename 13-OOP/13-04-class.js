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

    /*
      experimental

      // static property (field)
      static id = 0;

      // static method (field)
      static countId() {
        console.log(`total id's: ${User.id}`);
      }

      // private property (field)
      #isSuperUser = false;     using only inside class

      // private method
      #showSuperUser() {
        console.log(this.#isSuperUser);
      }

      // public properties (fields)
      name = 'Unknown';
      age = 0;

      ===

      constructor(name = 'Unknown', age = 0, isSuperUser = false) {
        // static property
        this.id = ++User.id;

        // private property
        this.#isSuperUser = isSuperUser;

        // public properties
        this.name = name;
        this.age = age;
      }
    */

    // static property
    static id = 0;

    // static method
    static countId() {
      console.log(`total numbers of users: ${User.id}`);
    }

    // private property
    #isSuperUser = false;

    constructor(name, age, isSuperUser = false) {
      /* this = {}; // (implicitly) */

      // closed property
      // this._isSuperUser = false;
      this.#isSuperUser = isSuperUser;

      // static property
      this.id = ++User.id;

      /* this.property = function constructor argument */
      this.name = name;
      this.age = age;

      /* return this; // (implicitly) */
    }

    // class getter is a syntax to bind class property with class method
    get isSuperUser() {
      console.log(`reading superUser permission: ${this.#isSuperUser}`);
      return this.#isSuperUser;
    }

    // class setter is a syntax to bind class property with class method
    // called when assigned value to the property
    set isSuperUser(value) {
      console.log(`changing superUser permission`);
      return this.#isSuperUser = value;
    }

    // create public method
    /* User.prototype.getUserInfo */
    getUserInfo() {
      return `My name is ${this.name}, i'm ${this.age} yeasr old.`;
    }

    // overriding public method .toString() from Object.prototype
    /* User.prototype.toString */
    toString() {
      return `User data: ${this.name} ${this.age}`;
    }

    // create private method
    #showFullInfo() {
      console.log(`id: ${this.id}, name:${this.name}, age: ${this.age}, superUser: ${this.#isSuperUser}`);
    }

    show() {
      this.#showFullInfo();
    }
  }

  /*
    // current class static property and method notation (outside of the class constructor)
  
    // static property
    User.id = 0;
  
    // static method
    User.countId = function() {
      console.log(`total numbers of users: ${User.id}`);
    }
  */


  // operator 'new' create empty Object {}
  // create new Object inheritance from function constructor
  const john = new User('John', 31);  // User { id: 1, name: "John", age: 31, #isSuperUser: false }
  const alex = new User('Alex', 33);  // User { id: 2, name: "Alex", age: 33, #isSuperUser: false }


  // call static method
  User.countId();                     // 'total numbers of users: 2'
  // read static property
  User.id;                            // 2


  // call class getter, setter
  /*
    calling getter as reading class property
    john.isAdmin; NOT john.isAdmin();
    calling setter assignment class property
    john.isAdmin = true;
  */
  // john.isSuperUser();                  // TypeError: john.isSuperUser is not a function
  john.isSuperUser;                       // 'reading superUser permission: false'
  john.isSuperUser = true;                // 'changing superUser permission'
  john.isSuperUser;                       // 'reading superUser permission: true'


  // call public methods
  john.getUserInfo();                 // 'My name is John, i'm 31 yeasr old.'
  john.toString();                    // 'User data: John 31'

  // call private method using function show()
  alex.show();               // 'id: 2, name:Alex, age: 33,superUser: false'
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
*/