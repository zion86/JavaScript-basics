// spread operator unpack elements
// work with Array, String, Object

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


{ // create Array copy
  const arr1 = ['one', true, [3]];    // [ 'one', true, [ 3 ] ]
  const copyArr1 = [...arr1];         // [ 'one', true, [ 3 ] ]
  // const copyArr2 = arr1.slice();   // [ 'one', true, [ 3 ] ]
}


{ // ...spread operator in function
  const numbers = [1, 2, 3];

  const addNumbers = (a, b, c) => {
    return a + b + c;
  };

  // addNumbers(1, 2, 3);             // unpack arguments
  addNumbers(...numbers);             // 6
}