'use strict';

const options = {
  name: 'text',
  width: 1024,
  colors: {
    bg: 'red',
    color: 'black',
  }
};


// create Array with keys names from Object
Object.keys(options);               // ['name', 'width', 'colors']
Object.keys(options).length;        // 4


// return Array with pairs [ [key, value] ]
Object.entries(options);
  // [
  //    ['name', 'text'],
  //    ['width', 1024],
  //    ['colors', { bg: 'red', color: 'black' }]
  // ]