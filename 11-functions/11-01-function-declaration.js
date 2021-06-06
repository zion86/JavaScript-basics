'use strict';

// functions is Object and have Object reference
// function declaration (always GLOBAL variable on TOP)
// first can run function and then create function
// 'hoisting'

fn();
const userName = 'John';

// create reference to the function
const fnReference = fn;

function fn() {
  // function local scope
  const userName = 'Alex';

  return userName;        // 'Alex'

  // by default function return undefined
  // after return code not work and will be ignored
}

{ // bad practice
  function badFn() {
    return // === return undefined;
    // code belowe will be ignored
    `First run function and then create it`;
  }
}