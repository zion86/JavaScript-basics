// GLOBAL variables: var, function fName() {} (have hoisting)
// LOCAL variables: let, const, const localFn = () => {};
// 'globalThis' is standard keyword for browser and node.js environments


// GLOBAL SCOPE: var, function declaration (inside window object)
// LOCAL SCOPE: let, const (inside script file)
var globalVar = 'global var';
window.globalVar;                               // 'global var'

let globalLet = 'global let';
window.globalLet;                               // undefined

const globalConst = 'global const';
window.globalConst;                             // undefined


{ // LOCAL SCOPE: global variables is visibles in local scope
  globalVar;                                    // 'global var'
  globalLet;                                    // 'global let'
  globalConst;                                  // 'global const'
}


{ // LOCAL SCOPE: let, const

  // let variable
  let date = '01.01.1990';                     // '01.01.1990'

  // function assignment
  const getLocalFn = () => {
    return 'local function (local variable)';
  };

  // var global variable inside local scope
  var userName = 'Alex';

  // function declaration is global variable inside local scope
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
// userName;                                  // 'Alex'
// window.showDate();                         // 'The date is: '01.01.1990''
// showDate();                                // 'The date is: '01.01.1990''


if (true) {
  // LOCAL SCOPE for let, const
}


for (let i = 0; i < 3; i++) {
  // LOCAL SCOPE for let, const
}


const fn = () => {
  // LOCAL SCOPE for var, let, const
  var nameVar = 'Pitter';
  let nameLet = 'Alex';
  const nameConst = 'John';
};

fn();
// name;                                       // ReferenceError: name is not defined