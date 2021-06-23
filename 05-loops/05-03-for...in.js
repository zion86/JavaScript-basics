'use strict';

// Object literal
const developer = {
  name: "Alex",
  rank: 'front-end',
  age: 24
};


// ES6 for in (Object) iterate only keys in Object or index in Array
for (const key in developer) {
  console.log(`proterty: ${key}, value ${developer[key]}`);      // key: value
  // proterty: name, value Alex
  // proterty: rank, value front-end
  // proterty: age, value 24
}