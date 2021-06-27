'use strict';

const options = {
  name: 'text',
  width: 1024,
  colors: {
    bg: 'red',
    color: 'black',
  }
};


// 
Object.assign();


// create Array with keys names from Object
Object.keys(options);               // ['name', 'width', 'colors']
Object.keys(options).length;        // 4


// method returns an array of a given object's own enumerable property values
Object.values(options);             // [ 'text', 1024, { bg: 'red', color: 'black' } ]


// return Array with pairs [ [key, value] ]
Object.entries(options);
  // [
  //    ['name', 'text'],
  //    ['width', 1024],
  //    ['colors', { bg: 'red', color: 'black' }]
  // ]