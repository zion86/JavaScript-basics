'use strict';

// Object literal
const developer = {
  name: "Alex",
  rank: 'front-end',
  age: 24
};


{ // ES6 for in (Object) iterate only keys in Object or index in Array
  for (const key in developer) {
    console.log(`Proterty ${key}: value ${developer[key]}`);           // key: value
    // name: Oleg
    // rank: Frontend
    // age: 33
  }
}