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
    name: 'text',
    width: 1024,
    colors: {
      bg: 'red',
      color: 'black',
      numbers: [1, 2],
    },
    // create es5 Object method makeTest
    makeTest: function () {
      console.log('Test');
    },
    // create es6 Object method makeTest
    makeTest1() {
      console.log('Test 1');
    },
  };

  // read values from Object
  console.log(options.name);										// text
  console.log(options.colors.bg);								// red
  console.log(options['name']);									// text
  console.log(options['colors']['bg']);					// red

  // run Object method
  options.makeTest();

  // delete value from Object
  delete options.width;
}

{ // check if Object include object field [key]: value
  const person = {
    name: 'Alex',
  };

  const nameLength = person?.name?.length       // return person.name, name length = 4
  const personAge = person?.age;                // return undefined, person.age not exist
	const personName = person?.name;							// return 'Alex'
}