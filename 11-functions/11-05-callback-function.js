'use strict';

{ // callback function
  function printName(name, callback) {
    console.log(`My name is ${name}`);
    callback();
  }

  function printText() {
    console.log('And this is true');
  }

  // run callback function
  printName('Oleg', printText);
}