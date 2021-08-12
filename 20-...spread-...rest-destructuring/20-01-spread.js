// spread operator unpack elements
// work with Array [], Object {}

{ // unpack String to the Array
  const str = 'Alex';
  const addStrToArray = [...str];     // [ 'A', 'l', 'e', 'x' ]
}


{ // unpack String to the Object
  const str = 'Alex';
  const addStrToObject = { ...str };  // { '0': 'A', '1': 'l', '2': 'e', '3': 'x' }
}


{ // unpack one Array to the another Array
  const arr1 = ['Alex', 'John'];      // [ 'Alex', 'John' ]
  const arr2 = ['Eva', ...arr1];      // [ 'Eva', 'Alex', 'John' ]
  const arr3 = [...arr2, 'Bill'];     // [ 'Eva', 'Alex', 'John', 'Bill' ]
}


{ // ...spread operator in function
  const numbers = [1, 2, 3];

  const addNumbers = (a, b, c) => {
    return a + b + c;
  };

  // addNumbers(1, 2, 3);             // unpack arguments
  addNumbers(...numbers);             // 6
}


{ // create Array copy
  const arr1 = ['one', true, [3]];    // [ 'one', true, [ 3 ] ]
  const copyArr1 = [...arr1];         // [ 'one', true, [ 3 ] ]
  // const copyArr2 = arr1.slice();   // [ 'one', true, [ 3 ] ]
}


{ // merge Object, copy Object
  const john = {
    name: 'John',
    lastName: 'Doe'
  };

  john;                               // { name: 'John', lastName: 'Doe' }

  // create Object copy
  const copyUser = {
    ...john,
    age: 34,
  };

  copyUser;                           // { name: 'John', lastName: 'Doe', age: 34 }

  // merge two Objects
  const mergeObjects = {
    ...john,
    ...copyUser,
    role: 'front-end',
  };

  mergeObjects;                       // { name: 'John', lastName: 'Doe', age: 34, role: 'front-end' }
}