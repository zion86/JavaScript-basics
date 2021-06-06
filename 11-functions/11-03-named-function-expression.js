'use strict';

// named function expression
const fn = function addNumbers(x) {
  console.log(fn.name);
  console.log(x);
};

fn(5);