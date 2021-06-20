'use strict';

// const keyword


// BORNYEAR;                                    // ReferenceError: Cannot access 'BORNYEAR' before initialization
const BORNYEAR = 1900;                          // 1900
// BORNYEAR = 1901;                             // TypeError: Assignment to constant variable.


{ // reassign const Object variable because they have reference data type
  const obj = {
    role: 'front-end',
  };

  // read Object proterty
  obj.role;                                     // 'front-end'

  // reassign const Object property
  obj.role = 'back-end';

  // read Object proterty
  obj.role;                                     // 'back-end'
}

{ // reassign const Array variable because they have reference data type
  const arr = [1, 2, 3, 4];                     // [ 1, 2, 3, 4 ]

  // reassign const Array element
  arr[1] = 'string';                            // [ 1, 'string', 3, 4 ]
}