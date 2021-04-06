'use strict';

// global variable
const name = 'Andy';

{ // switch
  switch (name) {

    case 'Peter':
      console.log('User name is: ' + name);
      break;

    case 'Andy':
      console.log('User name is: ' + name);
      break;

    default:
      console.log('switch: Please enter user name');
      break;
  }
}