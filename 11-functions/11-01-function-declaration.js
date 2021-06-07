'use strict';

// functions is Object and have Object reference
// function declaration (always GLOBAL variable on TOP)
// first can run function and then create function
// function, var 'hoisting'

// call fn function
fn();

// global variable
const userName = 'John';

// create reference to the function
const fnReference = fn;

// function declaration
function fn() {
  // function local scope
  const userName = 'Alex';
	
	// var 'hoistiong'
	console.log(user);

  return userName; // 'Alex'
	
	// var global scope inside function
  var user = 'John';

  // by default function return undefined
  // after return code not work and will be ignored
}

{ // bad practice
  function badFn() {
		// code
		
    return // === return undefined;
		
    // code belowe will be ignored
    `First run function and then create it`;
  }
}