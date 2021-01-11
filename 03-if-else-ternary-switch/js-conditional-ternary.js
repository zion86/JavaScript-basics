'use strict';

// global variable
const name = 'Andy';

{
  // if / else

  if (name === 'Andy') {
    console.log('if / else: ', 'User name is: ' + name);
  } else {
    console.log('if / else: ', 'User have another name');
  }
}

{
  // if / else if / else

  if (name === 'Andy') {
    console.log('if / else if / else: ', 'User name is: ' + name);
  } else if (name === 'Peter') {
    console.log('if / else if / else: ', 'User name is: ' + name);
  } else {
    console.log('if / else if / else: ', 'User have another name');
  }
}

{
  // switch

  switch (name) {
    case 'Peter':
      console.log('switch: ', 'User name is: ' + name);
      break;

    case 'Andy':
      console.log('switch: ', 'User name is: ' + name);
      break;

    default:
      console.log('switch: Please enter user name');
      break;
  }
}

{
  // ternary operator

  (name === 'Alex')
    ? console.log('ternary: ', 'User name is: ' + name)
    : console.log('ternary: ', 'User have another name');
}