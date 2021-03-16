'use strict';

// Object
const developer = {
  name: "Alex",
  rank: 'front-end',
  age: 24
};

// Array
const arr = ['one', 2, true, 'four'];

{ // while (condition is true)
  let a = 0;

  while (a < 3) {
    a++;
    // 0
    // 1
    // 2
  };
}

{ // do...while
  let b = 0;

  do {
    console.log(b++);
  } while (b < 3);
  // 0
  // 1
  // 2
}

{ // for loop

  for (let i = 0; i < 3; i++) {
    console.log(i);
    // 0
    // 1
    // 2
  };
}

{ // for loop with break or continue

	for (let i = 0; i < 3; i++) {
    if (i === 1) {
      console.log(`${i} === 1, for loop is stoped!`);
      break;
    }

    console.log(i);
  }

  for (let i = 0; i < 3; i++) {
    if (i === 1) {
      console.log(`${i} === 1, for loop miss 1`);
      continue;
    }

    console.log(i);
  }
}

{ // ES6 for of - iterate ONLY elements in ARRAY (not index)

  for (let value of arr) {
    console.log(value); // one, 2, true, four
  };
}


{ // ES6 for in (Object) iterate only keys in Object

  for (let key in developer) {
    console.log(`${key}: ${developer[key]}`); // key: value
    // name: Oleg
    // rank: Frontend
    // age: 33
  };
}