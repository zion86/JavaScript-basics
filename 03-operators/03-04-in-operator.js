// in operator returns true
// if the specified property is in the specified objector its prototype chain


const user = {
  login: 'admin',
  email: 'admin@mail.com',
  unsubscribeData: undefined,
}

if ('unsubscribeData' in user) {
  console.log('user property is exist in Object');
} else {
  console.log('user property is not exist in Object');
}