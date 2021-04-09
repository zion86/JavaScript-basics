'use strict';

// Array
const arr = ['one', 2, true, 'four'];


{ // ES6 for of - iterate ONLY elements in ARRAY (not index)

  for (const value of arr) {
    console.log(value); // one, 2, true, four
  };
}