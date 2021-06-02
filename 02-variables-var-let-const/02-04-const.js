'use strict';

{ // const
  // local scope

  const BORNYEAR = 1900;                          // local variable
  console.log('BORNYEAR: ', BORNYEAR);

  // BORNYEAR = 1901;                             // TypeError: Assignment to constant variable.
}

// console.log('BORNYEAR: ', BORNYEAR);           // ReferenceError: BORNYEAR is not defined

{ // reassign const Object variable because they have reference data type
  const obj = {
    role: 'front-end'
  };

  console.log(obj.role);                          // front-end
  obj.role = 'back-end';                          // reassign const Object data type
  console.log(obj.role);                          // back-end
}

{ // reassign const Array variable because they have reference data type
  const arr = [1, 2, 3, 4];
  console.log('arr: ', arr);                      // arr:  [ 1, 2, 3, 4 ]

  arr[1] = 'string';
  console.log('arr: ', arr);                      // arr:  [ 1, 'string', 3, 4 ]
}