'use strict';


{ // ES6 Arrow function expression v1 (always LOCAL variable)
  // One line expression
  const arrowFn = () => console.log(`Arrow function in one line`);


  // ES6 Arrow function expression v2 (always LOCAL variable)
  const arrowFn1 = () => {
    console.log(`Arrow function in multi lines`);
  };


  // ES6 Arrow function expression v3 return Object
  const user = (name, surName) => ({
    name,
    surName,
    getFullName: () => `Full name is: ${name} ${surName}`
  });


  // ES6 Arrow function expression v3 return Array
  const arrGenerator = (...args) => ([
    ...args
  ]);


  // ES6 Arrow function expression v5 IIFE (always LOCAL variable)
  (() => console.log(`Arrow function IIFE`))();


  // call arrow functions
  arrowFn();
  arrowFn1();
  user('John', 'Dou');
  arrGenerator(1, 2, 5, 'true');
}


{ // arrow function haven't 'this' and 'arguments' and take its above, at the parent function
  const obj = {
    name: 'Alex',
    age: 23,
    getInfo() {
      // arrow function take this above from parent context
      const arrFn = () => console.log(`My info: ${this.name} ${this.age}`);
      return arrFn();
    }
  };

  obj.getInfo();       // 'My info: Alex 23'
}