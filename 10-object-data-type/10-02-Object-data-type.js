'use strict';

// Object not can convert to String [object, Object]

{ // create object

  // Object literal
  const obj1 = {                          // { key: 'value' }
    key: 'value',
  };

  // Object constructor
  const obj2 = new Object();              // { }
}


{ //es5, es6 syntax
  const name = 'Alex';
  const age = 24;
  const showInfo = function () {
    console.log(`${this.name} ${this.age}`);
  };
  const dynamicKey = 'some value';

  const alex = {
    name: name,                           // es5
    age,                                  // es6 === age: age
    showInfo,                             // es6
    [dynamicKey]: 'result',
    [3 + 5]: 'dynamic expression',
  };

  alex.showInfo();                        // 'Alex 24'
  alex[dynamicKey];                       // 'result'
  alex[3 + 5];                            // 'dynamic expression'
}


{ // Object literal
  const options = {

    // key: value
    name: 'text',                         // Object property or field
    width: 1024,
    colors: {
      bg: 'red',
      color: 'black',
      numbers: [1, 2],
    },

    makeTest: function () {               // ES5 Object method
      console.log('Test');
    },

    makeTest1() {                         // ES6 Object method
      console.log('Test 1');
    },
  };

  // read Object properties
  options.name;                           // 'text'
  options.colors.bg;                      // 'red'
  options['name'];                        // 'text'
  options['colors']['bg'];                // 'red'

  // read Object properties dynamically using variable
  const propName = 'colors';
  options[propName];                      // { bg: 'red', color: 'black', numbers: [ 1, 2 ] }

  // read non-existent property
  options.boredr;                         // undefined

  // add new property to the Object
  options.length = 4;

  // change value in the Object 
  options.width = 320;

  // add new Object method
  options.showName = function () {
    console.log(this.name);
  };

  // call Object method
  options.showName();                     // 'text'

  // delete Object property
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