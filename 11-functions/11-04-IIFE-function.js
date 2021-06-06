'use strict';

{ // IIFE function declaration function
  // ('means' return function)();
  // (function() {})();

  (function (arg) {
    console.log(`Anonymus IIFE function declaration function ${arg}`);
  }('hello'));

  // IIFE function expression function
  // local scope, module with local variables
  (function () {
    console.log(`Anonymus IIFE function expression function`);
  }());
}

{ // create Object module with using IIFE
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