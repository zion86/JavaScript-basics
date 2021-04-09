'use strict';

// CURRING is when function return another function

{ // function declaration (always GLOBAL variable on TOP)
  function add(x) {
    return function (y) {
      return x + y;
    };
  };

  const sum = add(1);
  sum(1); // 2
}


{ // function expression (always LOCAL variable)
  const add1 = function (x) {
    return function (y) {
      return x + y;
    };
  };

  const sum1 = add1(2);
  sum1(2); // 4
}


{ // ES6 Arrow function v1 (always LOCAL variable)
  const add2 = (x) => {
    return (y) => {
      return x + y;
    };
  };

  const sum2 = add2(3);
  sum2(3); // 6
}


{ // ES6 Arrow function v2 (always LOCAL variable)
  const add3 = x => y => x + y;

  const firstArgX = add3(5);
  const secondArgY = add3(5);
  firstArgX(5); // 10
  secondArgY(20); // 25
}


{ // ES6 Arrow function v3 (always LOCAL variable)
  const printNames = (a) => (b) => (c) => `${a} / ${b} / ${c}`;
  const print = printNames('front-end')('back-end')('fullstack');
  console.log('print: ', print); // print:  front-end / back-end / fullstack
}


{ // example
  const users = [
    { id: 1, name: 'Front-end' },
    { id: 2, name: 'Back-end' },
  ];

  const names = key => obj => obj[key];
  const name = names('name');
  const printName = users.map(name);
  console.log('printName: ', printName);
}