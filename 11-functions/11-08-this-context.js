'use strict';

{ // context environment this
  function showThis(a = 2, b = 2) {
    // in default mode this === window
    // in strict mode this === undefined
    console.log(this); // undefined

    // nested function
    function sum() {
      // inside nested function in default mode this === window
      // inside nested function in strict mode this === undefined
      console.log(this); // undefined
      return a + b;
    };

    console.log(sum());
  }

  showThis();
}

{ // this inside Object
  const obj = {
    a: 10,
    b: 20,

    // Object method
    sum: function () {
      // inside Object method 'this' reference to this Object
      console.log(this); // { a: 10, b: 20, sum: [Function: sum] }

      // // inside nested function in default mode this === window
      // // inside nested function in strict mode this === undefined
      // function hide() {
      //   console.log(this); // undefined
      // };
      // hide();
    }
  };

  obj.sum(); // this has reference on self Object from left side obj.method()
}

{ // this inside function Constructors and Class === new inheritance Object
  // function Constructor
  function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.greating = function () {
      console.log(this);
      console.log(`Hello ${this.name}`);
    };
  };

  // this reference to function Constructor of Class
  const alex = new User('Alex', 33);
  alex.greating();
}

{ // manual bind this using reference
  const user = {
    name: 'Alex'
  };

  // add arguments in function
  function sayName(surname) {
    console.log(this);
    console.log(this.name + ' ' + surname);
  };

  // dynamicly bind Object with function using Object reference
  user.sayName = sayName;

  // call Object binded method
  user.sayName('Smit');
}

{ // manual bind this .call() .apply() .bind()
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
  sayFullNameFn();

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

{ // in arrow function not exist this context
  const obj = {
    num: 5,
    sayNumber: function () {

      // arrow function always take context in parent element
      const say = () => {
        console.log(this); // { num: 5, sayNumber: [Function: sayNumber] }
      };

      say();
    }
  };

  obj.sayNumber();
}

{ // this in addEventListener
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
