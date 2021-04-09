'use strict';

// Object
const developer = {
  name: "Alex",
  rank: 'front-end',
  age: 24
};


{ // ES6 for in (Object) iterate only keys in Object

  for (let key in developer) {
    console.log(`${key}: ${developer[key]}`);	// key: value
    // name: Oleg
    // rank: Frontend
    // age: 33
  };
}