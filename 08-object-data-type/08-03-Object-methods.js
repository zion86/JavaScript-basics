'use strict';

{
  const options = {
    name: 'text',
    width: 1024,
    colors: {
      bg: 'red',
      color: 'black',
    }
  };

  // create Array with keys names from Object
  console.log(Object.keys(options).length); // ['name', 'width', 'colors']

  // return Array with pairs [ [key, value] ]
  console.log(Object.entries(options));
  // [
  //  ['name', 'text'],
  //  ['width', 1024],
  //  ['colors', { bg: 'red', color: 'black' }]
  // ]
}