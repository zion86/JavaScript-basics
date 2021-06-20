'use strict';

// functions is Object and have Object reference
// function declaration (always GLOBAL variable on TOP)
// first can run function and then create function
// function, var 'hoisting'

// call function
getUserName();

// global variable
const userName = 'John';

// create reference to the function
const referenceGetUserName = getUserName;


// function declaration
function getUserName() {
  // function LOCAL SCOPE
  const userName = 'Alex';

  // var 'hoistiong'
  user = 'John';                            // 'John'
  // var global scope inside function
  var user;

  return userName;                          // 'Alex'
  // by default function return undefined
  // after return code not work and will be ignored
}

// call function
getUserName();
// save function result to the variable
const name = getUserName();                 // 'Alex'


{ // bad practice
  function badFn() {

    return // === return undefined;

    // code belowe will be ignored
    `First run function and then create it`;
  }

  badFn();
}