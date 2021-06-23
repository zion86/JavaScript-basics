// var, variable without var or let keyword, function declaration have 'hoisting'


// var variable can call before creating
// 'hoisting'
globalVariable;                                   // undefined
var globalVariable;                               // undefined
globalVariable = 'assigning data to a variable';  // 'assigning data to a variable'


// function declaration can call before creating
// 'hoisting'
globalFunction();                                 // function exist before declaration

function globalFunction() {
  // variable without var or let keyword will be GLOBAL VARIABLE
  // 'hoisting'
  userName = 'Alex';
  console.log('I"m global function');
};

userName;                                         // 'Alex'


function sayHi() {
  // var phrase = 'Hello';
  // 'hoisting'
  phrase = 'Hello';

  if (false) {
    // 'hoisting'
    var phrase;
  }

  console.log(phrase);
}

sayHi();                                          // 'Hello'