'use strict';

{ // function name, arguments
  function funcName() {
    // get function name
    funcName.name;                      // 'funcName'
    arguments.callee.name;              // 'funcName'

    // arguments is a Array-like object (not iterable)
    arguments;                          // ['hello', 'world', 3]
    arguments.length;                   // 3
  };

  funcName('hello', 'world', 3);
}


{ // ...rest operator always go last in list
  const log = (arg1, arg2, ...restArgs) => {
    // ...rest operator return Array with elements
    console.log(arg1, arg2, restArgs);  // 'html', 'css' [ 'react.js', 'vue.js', 'angular.js' ]
  };

  log('html', 'css', 'react.js', 'vue.js', 'angular.js');
}


{ // ES5
  function printWord(word) {

    // v1
    // if (word === undefined) {
    //   word = 'Hello world!';
    // }

    // v2
    word = word || 'default value';
    console.log(word);
  }

  printWord();
}


{ // ES6 function arguments with default values
  function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
  }

  calcOrDouble(3);      // 6
  calcOrDouble(3, 2);   // 6

  // object as argument in function
  const mkString = (array, {
    separator = ',', leftDelimiter = '[', rightDelimiter = ']'
  } = {}) => {
    return `...`;
  }

  const result = mkString([1, 2, 3]);
}