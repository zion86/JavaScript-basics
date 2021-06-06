'use strict';

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