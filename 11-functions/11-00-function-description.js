
// function                             keyword
// getUser                              function name (identificator)
// (firstName, lastName)                paramiters (arguments)
// { }                                  function body
// return                               function always return undefined of some values

function getUser(firstName, lastName) {
  return `${firstName} ${lastName}`;
}


// call function
// getUser                              function name (identificator)
// ('John', 'Doe')                      paramiters (arguments)

getUser('John', 'Doe');


// save function result to variable

const name = getUser('John', 'Doe');    // John Doe