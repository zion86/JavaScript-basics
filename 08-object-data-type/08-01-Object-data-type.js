'use strict';

{ // Object not can convert to String [object, Object]

  // v1 create new Object
  const obj1 = {
    key: 'value'
  };

  // v2 create new Object
  const obj2 = new Object();
}

{ // create Object literal
  const options = {

    // key: value
    name: 'text',                         // Object field
    width: 1024,                          // Object propertie
    colors: {
      bg: 'red',
      color: 'black',
      numbers: [1, 2],
    },

    makeTest: function () {               // create ES5 Object method makeTest()
      console.log('Test');
    },

    makeTest1() {                         // create ES6 Object method makeTest()
      console.log('Test 1');
    },
  };

  // read values from Object
  options.name;                           // text
  options.colors.bg;                      // red
  options['name'];                        // text
  options['colors']['bg'];                // red

  // add new propertie to the Object
  options.length = 4;

  // modify propertie in the Object
  options.width = 320;

  // run Object method
  options.makeTest();

  // delete value from Object
  delete options.width;
}

{ // check if Object include object field [key]: value
  const person = {
    name: 'Alex',
  };

  const nameLength = person?.name?.length; // return person.name, name length = 4
  const personAge = person?.age;           // return undefined, person.age not exist
  const personName = person?.name;         // return 'Alex'
}

{ // Object looping
  const a = {};
  const b = {};

  a.ref = b;
  b.ref = a;
}