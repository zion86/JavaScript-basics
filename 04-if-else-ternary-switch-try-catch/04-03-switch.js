'use strict';

// global variable
const userName = 'Andy';

{ // switch always has strict compare 1 !== '1', 1 === 1
  switch (userName) {

    case 'Peter':
      console.log('User name is: ' + userName);
      break;

    case 'Andy':
    case 'andy': // can use multiple cases for check
      console.log('User name is: ' + userName);
      break;

    default:
      console.log('switch: Please enter user name');
    // break;
  }
}