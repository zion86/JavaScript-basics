'use strict';

// class constructor can't call without 'new' keyword
// class not support 'hoisting'
// class methods not support for...in loop
// class always run in 'use strict' mode

// ES6 Class declaration (superClass)

/* class not support 'hoisting' */
// const conor = new User('Conor', 21);  // ReferenceError: Cannot access 'User' before initialization

// class PascalCasing naming
class User {
  // User function constructor initialization
  /* 
    invoke after creating new Object using notation new User()
    new User('Alex', 32);
  */

  /*
    experimental

    // prorotype-like property 
    // User.prototype.active = 'online';  ES5
    active = 'online';                    ES6

    // static property
    // User.id = 0;                       ES5
    static id = 0;                        ES6

    // static method
    // User.countId = function() {        ES5
    //   console.log(`total id's: ${User.id}`);
    // }
    static countId() {                    ES6
      console.log(`total id's: ${User.id}`);
    }

    // private property                   ES6
    #isSuperUser = false;     using only inside class

    // private method
    #showSuperUser() {
      console.log(this.#isSuperUser);
    }

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

  /* User.prototype.active = 'online'; */
  /* exist in all istances of the parent class */
  // active = 'online';

  // static property
  /* exist only inside parent class */
  static id = 0;

  // static method
  /* exist only inside parent class */
  static countId() {
    console.log(`total numbers of users: ${User.id}`);
  }

  // private property
  /* exist only inside parent class */
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

  showInfo() {
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
alex.showInfo();               // 'id: 2, name:Alex, age: 33,superUser: false'



// class Frontend inherits all properties and methods from User class
class Frontend extends User {
  /*
    // by default extended class create a constructor
    constructor(...args) {
      super(...args);
    }
  */

  // Frontend function constructor initialization
  constructor(name, age, isSuperUser) {
    // call parent class constructor before using 'this' keyword using super(...args)!!!
    super(name, age, isSuperUser);

    this.developer = 'frontend';
  }

  // extended class public method
  showDeveloper() {
    return this.developer;
  }

  // overriding public User parent class method
  showInfo() {
    /*
      'super' is a access to the parent prototype methods store
      OR call parent class method using super.methodName()
      super.showInfo();

      AND add additional behavior to the created method
      console.log('add new feature to the extended class method');
    */
    super.showInfo();
    return `User is a ${this.developer} developer`;
  }
}

const patrik = new Frontend('Patrik', 18);        // Frontend { id: 3, name: "Patrik", age: 18, #showFullInfo: ƒ, #isSuperUser: false, … }
patrik.showDeveloper();                           // 'frontend'
patrik.showInfo();                                // 'id: 3, name:Patrik, age: 18, superUser: false'
//                                                // 'User is a frontend developer'



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