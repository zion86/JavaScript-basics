//  Primitive data types

{ // string
  const text = 'string';
  console.log('text: ', typeof (text));                 // string
}

{ // number
  const numberInt = 3;
  console.log('numberInt: ', typeof (numberInt));       // number

  const numberFloat = 3.33;
  console.log('numberFloat: ', typeof (numberFloat));   // number

  // Infinity, -Infinity
  const infinity = 1 / 0;
  console.log('infinity: ', infinity);                  // Infinity
  console.log('infinity: ', typeof (infinity));         // number

  // NaN
  const notNumber = 'text' / 3;
  console.log('notNumber: ', notNumber);                // NaN
  console.log('notNumber: ', typeof (notNumber));       // number

  // bigint
  const bigInt = 1234567890123456789012345678901234567890n;
  console.log('bigInt: ', typeof (bigInt));             // bigint
}

{ // boolean
  const isOpen = true;
  console.log('isOpen: ', typeof (isOpen));             // boolean
  const isClose = false;
  console.log('isClose: ', typeof (isClose));           // boolean
}

{ // null
  // [object] javascript language error!!!
  let age = null;
  console.log('age: ', typeof (age));                   // object

  // undefined
  let name;
  console.log('name: ', typeof (name));                 // undefined
}

{ // symbol
  const person = Symbol();
  console.log('person: ', typeof (person));             // symbol
}

// Object data types

{ // object
  const arr = [];
  const obj = {};
  console.log('arr: ', typeof (arr));                   // object
  console.log('obj: ', typeof (obj));                   // object
}

{ // function (object)
  function fn() { };
  console.log('fn: ', typeof (fn));                     // function
}