'use strict';

{ // ...rest operator always go last in list
  const log = (arg1, arg2, ...restArgs) => {
    // ...rest operator return Array with elements
    console.log(arg1, arg2, restArgs);
  };

  log('html', 'css', 'react.js', 'vue.js', 'angular.js');
}

{ // ES5
  function printWord(word) {
    if (word === undefined) {
      word = 'Hello world!';
    }
    console.log(word);
    console.log('Hello user');
  }

  printWord();
}

{ // ES6
  // function arguments with values by default
  function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
  }

  calcOrDouble(3); // 6
  calcOrDouble(3, 2); // 6
}