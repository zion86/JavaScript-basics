'use strict';

// 'this' context environment

// v1 global window context
/* GLOBAL function has Global Object Window 'this' (window.showThis) */
/* in strict mode GLOBAL function has undefined this */
function showThis(a = 2, b = 2) {
  // in default mode 'this' === window
  // in 'strict mode' 'this' === undefined
  console.log(this);                    // undefined

  // nested function
  function sum() {
    // inside nested function in default mode this === window
    // inside nested function in strict mode this === undefined
    console.log(this);                  // undefined

    return a + b;
  };

  console.log(sum());
}

showThis();


// v2 Object context
// 'this' returns this Object context
// using that = this in nested function of object method
{
  const obj = {
    a: 10,
    b: 20,

    // object method
    sum: function () {
      // inside Object method 'this' reference to this Object
      console.log(this);                // { a: 10, b: 20, sum: [Function: sum] }
      console.log(this.a + this.b);     // 30

      // save 'this' context to variable 'that'
      const that = this;

      function hide() {
        // inside nested function in default mode this === window
        // inside nested function in strict mode this === undefined

        // console.log(this);           // undefined
        console.log(that);              // { a: 10, b: 20, sum: ƒ }
      };

      hide();
    }
  };

  obj.sum();                            // 'this' has reference on self Object from left side obj.method()


  // manual bind 'this' using object property reference
  const user = {
    name: 'Alex'
  };

  // add arguments to the function
  function sayName(surname) {
    console.log(this);
    console.log(this.name + ' ' + surname);
  };

  // dynamicly bind object with function using object reference
  user.sayName = sayName;

  // call object using binded method
  user.sayName('Smit');
}


// v3 'this' in the function constructor, class, function fabric
{ // function constructor
  function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.greating = function () {
      console.log(this);
      console.log(`Hello ${this.name}`);
    };
  };

  // 'this' reference to the function constructor of class
  const alex = new User('Alex', 33);
  alex.greating();                      // User { name: 'Alex', id: 33, human: true, greating: [Function(anonymous)] }, 'Hello Alex'


  // es6 class
  class NewUser {
    constructor(name, age) {
      this.name = name;
      this.age = age;

      console.log(this);
    }
  }

  const john = new NewUser('John', 32); // NewUser { name: 'John', age: 32 }


  // function fabric
  function createUser(login, email) {
    return {
      // ES5 syntax properties
      // login: login,
      // email: email,

      // ES5 syntax method
      // showContactInfo: function () {
      //   console.log(`My login is: ${this.login}, email is: ${this.email}`);
      // },

      // ES6 shorthand syntax properties
      login,
      email,

      // ES6 shorthand syntax method
      showContactInfo() {
        console.log(`My login is: ${this.login}, email is: ${this.email}`);
      },
    }
  }

  const user1 = createUser('admin', 'admin@mail.com');
  user1.showContactInfo();              // 'My login is: admin, email is: admin@mail.com'

  const user2 = createUser('user', 'user@mail.com');
  user2.showContactInfo();              // 'My login is: user, email is: user@mail.com'
}


// v4 manual bind 'this' using function methods func.call() func.apply() func.bind()
{
  const user = {
    name: 'Alex'
  };

  // add arguments in function
  function sayName(surname) {
    console.log(this);
    console.log(this.name + ' ' + surname);
  };

  // bind function with Object to get function with Object context
  // similar Object.method(this)
  // add arguments from function

  // .bind function to the Object
  const sayFullNameFn = sayName.bind(user, 'Burton');
  // call binded function
  sayFullNameFn();                      // { name: 'Alex' }, 'Alex Burton'

  // call function with (this context)
  sayName.call(user, 'Smith');
  sayName.apply(user, ['Smith']);


  // create new function with .bind() method
  function count(num) {
    // this === count.bind(arg) arg inside .bind method
    return this * num;
  };

  // save inside variable to bind this context
  const double = count.bind(2);

  console.log(double(3)); // 6
  console.log(double(13)); // 26
}


// v5 'this' and arrow function
{ // in arrow function not exist this context
  const obj = {
    num: 5,
    sayNumber: function () {

      // arrow function always take context in parent element
      const say = () => {
        console.log(this);              // { num: 5, sayNumber: [Function: sayNumber] }
      };

      say();
    }
  };

  obj.sayNumber();
}


// v6 'this' in htmlElem.addEventListener('event', callback);
{
  const button = document.createElement('button');
  button.textContent = 'button';
  document.body.append(button);
  const btn = document.querySelector('button');

  btn.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
  });

  btn.addEventListener('click', function () {
    this.style.backgroundColor = 'green';
  });
}
