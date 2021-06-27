function getUser(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// function                             keyword
// getUser                              function name (identificator)
// (firstName, lastName)                paramiters (arguments)
// { }                                  function body
// return                               function always return undefined of some values

// call function:
// getUser                              function name (identificator)
// ('John', 'Doe')                      paramiters (arguments)

getUser('John', 'Doe');

// save function result to variable
const name = getUser('John', 'Doe');    // 'John Doe'


// function arguments
function testFuncArguments() {
  // arguments is an Array-like object accessible inside functions with 
  console.log(arguments);
}

testFuncArguments('hello', 123, true);  // { '0': 'hello', '1': 123, '2': true }