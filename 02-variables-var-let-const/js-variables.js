'use strict';

// variables types:
// GLOBAL (scope) variables: var, function fName() {} (have hoisting)
// LOCAL (scope) variables: let, const, const localFn = () => {};


// 'hoisting' can invoke variable before creating
console.log('globalVariable: ', globalVariable); // return globalVariable = undefined

var globalVariable; // create empty variable
console.log('globalVariable: ', globalVariable); // return globalVariable: undefined

globalVariable = 'assigning data to a variable'; // reassign variable
console.log('globalVariable: ', globalVariable); // globalVariable:  assigning data to a variable


// 'hoisting' can invoke function before creating
globalFunction(); // function exist before declaration
function globalFunction() {
  console.log('I"m global function');
};

{
  // local scope
  // localVariable; // ReferenceError: Cannot access 'localVariable' before initialization
  let localVariable;
  console.log('localVariable: ', localVariable); // localVariable: undefined

  localVariable = 'local variable';
  console.log('localVariable: ', localVariable); // localVariable: local variable

  const BORNYEAR = 1900; // local variable
  console.log('BORNYEAR: ', BORNYEAR);
  // BORNYEAR = 1901; // TypeError: Assignment to constant variable.

  const localFn = () => {
    console.log('local function (local variable)');
  };
  console.log('localFn: ', localFn()); // local function (local variable)

  var globalVarInLocalScope = 'global variable in local scope';
}

// localFn(); // ReferenceError: localFn is not defined

// console.log('BORNYEAR: ', BORNYEAR); // ReferenceError: BORNYEAR is not defined

// var can read from local scope
console.log('globalVarInLocalScope: ', globalVarInLocalScope); // globalVarInLocalScope:  global variable in local scope

{
  // we can reassign Array and Object because they are reference data types
  const obj = {
    role: 'front-end'
  };

  console.log(obj.role); // front-end
  obj.role = 'back-end'; // we can reassign const Object data type
  console.log(obj.role); // back-end


  const arr = [1, 2, 3, 4];
  console.log('arr: ', arr); // arr:  [ 1, 2, 3, 4 ]

  arr[1] = 'string'; // we can reassign const Array data type
  console.log('arr: ', arr); // arr:  [ 1, 'string', 3, 4 ]
}