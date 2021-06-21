// check Object properties

const user = {
  login: 'admin',
  email: 'admin@mail.com',
  unsubscribeData: undefined,
}

// v1 (best way for undefined)
if ('unsubscribeData' in user) {
  console.log(`user property is exist in Object`);
} else {
  console.log('user property is not exist in Object');
}


// v2
if (user.email !== undefined) { // property not exist if value undefined
  console.log('user property is exist in Object');
} else {
  console.log('user property is not exist in Object');
}


// v3
if (user.login) {
  console.log('user property is exist in Object');
} else {
  console.log('user property is not exist in Object');
}