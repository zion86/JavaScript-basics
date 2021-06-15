'use strict';

{ // while (condition is true)
  let a = 0;

  while (a < 3) {
    a++;
  };

  // 0
  // 1
  // 2
}

{ // while loop (example)
  let number = 101;

  while (number > 0) {
    const digit = number % 10;
    number = parseInt(number / 10);

    console.log(digit);
  }
}