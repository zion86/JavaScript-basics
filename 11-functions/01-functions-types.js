'use strict';

{ // function declaration (always GLOBAL variable on TOP)
  // first can run function and then create function
  // hoisting
  fn();

  function fn() {
    console.log(`First run function and then create it`);
  };
}

{ // function expression (always LOCAL variable)
  // first create function and then run it
  const fn1 = function () {
    console.log(`function expression`);
  };
  fn1();
}

{ // IIFE function declaration function
  (function () {
    console.log(`Anonymus IIFE function declaration function`);
  }());

  // IIFE function expression function
  // local scope, module with local variables
  (function () {
    console.log(`Anonymus IIFE function expression function`);
  }());

  // create Object module with using IIFE
  const user = (function () {
    const privat = function () {
      console.log('I am privat!');
    };

    // create Object with methods
    return {
      sayHello: privat
    };
  }());

  // invoke function from Object module
  user.sayHello();
}

{ // ES6 Arrow function expression v1 (always LOCAL variable)

  // One line expression
  const arrowFn = () => console.log(`Arrow function in one line`);
  arrowFn();

  // ES6 Arrow function expression v2 (always LOCAL variable)
  const arrowFn1 = () => {
    console.log(`Arrow function in multi lines`);
  };
  arrowFn1();

  // ES6 Arrow function expression v3 IIFE (always LOCAL variable)
  (() => console.log(`Arrow function IIFE`))();
}

{ // save value from function to variable
  const fnNum = () => {
    let num = 50;

    num += 1;
    return num;
  }

  let getFnNum = fnNum();
  console.log('getFnNum: ', getFnNum);
}

{ // callback function
  function printName(name, callback) {
    console.log(`My name is ${name}`);
    callback();
  }

  function printText() {
    console.log('And this is true');
  }

  // run callback function
  printName('Oleg', printText);
}