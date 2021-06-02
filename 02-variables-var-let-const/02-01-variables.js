'use strict';

// variables types:
// var always has global scope, var only inside functions has local scope.
// GLOBAL (scope) variables: var, function fName() {} (have hoisting)
// LOCAL (scope) variables: let, const, const localFn = () => {};


// global scope

// variables
var name = 'Pitter';
let color = 'red';
const bornYear = 1990;

{ // local scope
  const localFn = () => {
    console.log('local function (local variable)');
  };

  console.log('localFn: ', localFn());      // local function (local variable)
}

// localFn();                               // ReferenceError: localFn is not defined