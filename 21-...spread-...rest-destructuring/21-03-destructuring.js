{ // destructuring Object

  const options = {
    key: 'value',
    name: 'text',
    width: 1024,
    colors: {
      bg: 'red',
      color: 'orange',
      numbers: [1, 2],
    },
  };

  // rename destructured Object keys
  const { key: newName } = options;           // 'value'

  // Object destructuring with default paramiters
  const { colors = {} } = options;            // { bg: 'red', color: 'orange', numbers: [ 1, 2 ] }

  // nested Object destructuring with default paramiters
  // const { colors: { bg, color } } = options;
  const { colors: { bg = 'yellow', color = 'black' } } = options;
  color;                                      // 'red'
  bg;                                         // 'orange'

  const { colors: { numbers: [first, last] } } = options;
  console.log('first: ', first);              // 1
  console.log('last: ', last);                // 2


  // ...rest operator
  const { name, ...restValues } = options;
  name;                                       // 'text'
  restValues;                                 // { key: 'value', width: 1024, colors: { bg: 'red', color: 'orange', numbers: [1, 2] } }
}


{ // destructuring Array
  const names = ['Alex', 'john', 'Ali'];

  // miss second array element
  const [first, , third] = names;             // 'Alex', 'Ali'

  // ...rest operator
  const [alex, ...restNames] = names;
  alex;                                       // 'Alex'
  restNames;                                  // [ 'john', 'Ali' ]
}


{ // destructuring inside function
  const user = {
    firstName: 'John',
    lastName: 'Doe',
  };

  const getFullName = ({ firstName = 'Alex', lastName = 'Morris' } = {}) => {
    // const { firstName, lastName } = user;

    console.log(`${firstName} ${lastName}`);
  };

  getFullName(user);                          // 'John Doe'
  getFullName();                              // 'Alex Morris'
}


{ // javascript event destructuring
  // { target: { name, value } } = event
}


{ // destructuring [a, b] = [b, a]
  let a = 1;                                  // 1
  let b = 2;                                  // 2

  // v1
  [a, b] = [b, a];
  a;                                          // 2
  b;                                          // 1

  { // v2
    let a = 1;                                  // 1
    let b = 2;                                  // 2
    let c = null;                               // null

    c = b;                                      // 2
    b = a;                                      // 1
    a = c;                                      // 2
  }
}