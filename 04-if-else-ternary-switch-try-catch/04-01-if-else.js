'use strict';

// global variable
const name = 'Andy';

{ // if / else
  if (name === 'Andy') {
    console.log('User name is: ' + name);
  } else {
    console.log('User have another name');
  }
}


{ // if / else if / else
  if (name === 'Andy') {
    console.log('User name is: ' + name);
  } else if (name === 'Peter') {
    console.log('User name is: ' + name);
  } else {
    console.log('User have another name');
  }
}


{ // conditional render using && operator
  const name = 'Alex';

  // work
  name.length >= 4 && console.log(name);      // return Boolean true

  // not work
  name.length >= 5 && console.log(name);      // return Boolean false
}