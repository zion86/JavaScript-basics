'use strict';

{ // callback function
  function printName(name, callback) {
    console.log(`My name is ${name}`);
    callback();
  }

  function printText() {
    console.log('And this is true');
  }


  // call function with callback

  // v1
  printName('John', printText);

  // v2
  printName('Alex', () => console.log(`It's true`));
}