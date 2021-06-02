'use strict';

// var 'hoisting' can invoke variable before creating

console.log('globalVariable: ', globalVariable);  // return globalVariable: undefined

var globalVariable;                               // create empty variable
console.log('globalVariable: ', globalVariable);  // return globalVariable: undefined

globalVariable = 'assigning data to a variable';  // reassign variable
console.log('globalVariable: ', globalVariable);  // return globalVariable: assigning data to a variable


// function declaration 'hoisting' can invoke function before creating
globalFunction();                                 // function exist before declaration

function globalFunction() {
  console.log('I"m global function');
};