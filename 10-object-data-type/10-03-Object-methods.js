'use strict';

const options = {
  name: 'text',
  width: 1024,
  colors: {
    bg: 'red',
    color: 'black',
  }
};


{ // Object.assign();

  const object1 = {
    name: 'Alex',
    age: 10,
    location: 'Poland',
  };

  const object2 = {
    name: 'Pitter',
    getInfo() {
      console.log(`${this.name}`);
    },
  };

  const object3 = {
    name: 'John',
    age: 15,
  };

  // object 2 rewrite the same properties from object2, object2 rewrite the same properties from object1
  // merge two or more objects objects
  // priority                       3   <=  2!!  <=  1!!!
  const mergeObj = Object.assign(object1, object2, object3);
  mergeObj;                         // { name: 'John', age: 15, location: 'Poland', getInfo: [Function: getInfo] }

  // priority                    newObj  2!  <=  1!!
  const createObj = Object.assign({}, object2, object3);
  createObj;                        // { name: 'John', getInfo: [Function: getInfo], age: 15 }
}


// create Array with keys names from Object
Object.keys(options);               // ['name', 'width', 'colors']
Object.keys(options).length;        // 4


// method returns an array of a given object's own enumerable property values
Object.values(options);             // [ 'text', 1024, { bg: 'red', color: 'black' } ]


// return Array with pairs [ [key, value] ]
Object.entries(options);
  // [
  //    ['name', 'text'],
  //    ['width', 1024],
  //    ['colors', { bg: 'red', color: 'black' }]
  // ]