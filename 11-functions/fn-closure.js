'use strict';

// closure

{ // function declaration (always GLOBAL variable on TOP)
  function counter() {
    let count = 0;          // private value

    return function () {    // closure
      return ++count;
    }
  }

  const startCount = counter();
  startCount(); // 1
  startCount(); // 2
}


{ // ES6 Arrow function v1 (always LOCAL variable)
  const counter1 = () => {
    let count = 0;            // private value

    return () => {            // closure
      return ++count;
    }
  }

  const startCount1 = counter1();
  startCount1(); // 1
  startCount1(); // 2
}


{ // ES6 Arrow function v2 (always LOCAL variable)
  const counter2 = () => {
    let count = 0;             // private value

    return () => ++count;      // closure
  }

  const startCount2 = counter2();
  startCount2(); // 1
  startCount2(); // 2
}


{ // ES6 Arrow function v3 IIFE (always LOCAL variable)
  const counter3 = (() => {
    let count = 0;

    return {                    // return Object
      inc: () => ++count,
      dec: () => --count,
      res: () => count = 0,
    }
  })();

  counter3.inc(); // 1
  counter3.inc(); // 2
  counter3.dec(); // 1
  counter3.res(); // 0
}