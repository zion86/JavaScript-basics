'use strict';

// Array
const arr = ['one', 2, true, 'four'];


{ // ES6 for...of - iterate ONLY elements in ARRAY (not index)
  for (const value of arr) {
    console.log(value); // one, 2, true, four
  };
}


{ // for...of can iterate Array-like Objects
  function iterateArgs() {

    // arguments is Array-like Object (collection)
    for (const arg of arguments) {
      console.log(arg);
    }
  }

  iterateArgs('hello', undefined, 3, false, null);
}