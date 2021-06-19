'use strict';

// GLOBAL scope: var, function fName() {} (have hoisting)
// LOCAL scope: let, const, const localFn = () => {};


// global scope for var, let, const
var globalVar = 'global var';
let globalLet = 'global let';
const globalConst = 'global const';

{ // global variables visible in local scope
  globalVar;                                    // 'global var'
  globalLet;                                    // 'global let'
  globalConst;                                  // 'global const'
}


{ // local scope for let, const

  // let variable
  let date = '01.01.1990';                     // '01.01.1990'

  // function assignment
  const getLocalFn = () => {
    return 'local function (local variable)';
  };

  // var global variable inside local scope
  var userName = 'Alex';

  // function declaration global variable inside local scope
  function showDate() {
    return `The date is: '01.01.1990'`;
  }


  // reading varibles inside local scope
  date;                                       // '01.01.1990'
  getLocalFn();                               // 'local function (local variable)'
  userName;                                   // 'Alex'
  showDate();                                 // 'The date is: '01.01.1990''
}

// date;                                      // ReferenceError: date is not defined
// getLocalFn();                              // ReferenceError: localFn is not defined

// showDate();                                // The date is: '01.01.1990'
// userName;                                  // 'Alex'

if (true) {
  // local scope for let, const
}

for (let i = 0; i < 3; i++) {
  // local scope for let, const
}


const fn = () => {
  // local scope for var, let, const
  var name = 'Pitter';
  let name = 'Alex';
  const name = 'John';
};

// name;                                       // ReferenceError: name is not defined