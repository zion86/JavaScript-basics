'use strict';

// Array
const arr = ['one', 2, true, 'four'];

{ // for loop
  for (let i = 0; i < 3; i++) {
    console.log(i);
    // 0
    // 1
    // 2
  };
}

{
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    // 'one'
    // 2
    // true
    // 'four'
  }
}

{ // for loop with break or continue
  for (let i = 0; i < 3; i++) {
    if (i === 1) {
      console.log(`${i} === 1, for loop is stoped!`);
      break;
    }

    console.log(i);
  }

  // for loop with continue
  for (let i = 0; i < 3; i++) {
    if (i === 1) {
      console.log(`${i} === 1, for loop miss 1`);
      continue;
    }

    console.log(i);
  }
}

{ // loop label
  mainloop: for (let i = 0; i <= 5; i++) {

    for (let j = 0; j <= 5; j++) {

      for (let k = 0; k <= 5; k++) {
        console.log({ i, j, k });

        if (i * j * k >= 100) {
          // with loop label break all loops
          break mainloop;
        }
      }
    }
  }
}