'use strict';

// global variable
const userName = 'Andy';

{ // if / else
  if (userName === 'Andy') {
    console.log('User name is: ' + userName);
  } else {
    console.log('User have another name');
  }
}

{ // if / else if / else
  if (userName === 'Andy') {
    console.log('User name is: ' + userName);
  } else if (userName === 'Peter') {
    console.log('User name is: ' + userName);
  } else {
    console.log('User have another name');
  }
}

{ // conditional render using && operator
  const userName = 'Alex';

  // work
  userName.length >= 4 && console.log(userName);      // return Boolean true

  // not work
  userName.length >= 5 && console.log(userName);      // return Boolean false
}

{ // bad practice
  if (userName === 'Andy')                            // if block
    console.log(`Hello ${userName}`);                 // if block
  console.log(`How are you?`);                        // else block
  console.log(`You are not ${userName}`);             // else block

  // right approach
  if (userName === 'Andy') {                          // if block
    console.log(`Hello ${userName}`);                 // if block
    console.log(`How are you?`);                      // if block
  } else {                                            // else block
    console.log(`You are not ${userName}`);           // else block
  }
}