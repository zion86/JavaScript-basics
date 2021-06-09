{ // pure function (return always same result)
  const getSum = (...rest) => {
    let sum = 0;

    for (let i = 0; i < rest.length; i++) {
      sum += rest[i];
    }

    return sum;
  };

  getSum(1, 2, 3, 4, 5);                        // 15
}

{ // function with side effect
  // v1 always return different result
  const getRandom = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  getRandom(1, 3);                              // 3 // 1 // 2


  // v2 mutate global variable
  const digits = [23, 1, -1, 34];

  const getMax = (arr) => {
    arr.sort((a, b) => b - a);
    return arr[0];
  };

  getMax(digits);                               // 34
}


{ // first-class function, higher-order function: passing functions as arguments
  // v1
  const getSum = (a, b, callback) => {
    callback(a + b);
  };

  getSum(1, 4, (sum) => console.log(sum));      // 5

  // v2
  const getSummer = (a, b) => {
    return () => {                         // * <=
      return a + b;                           // |
    };                                        // |
  };                                          // |
  // getResult is a referense to the function * =>
  const getResult = getSummer(5, 15);
  getResult();                                  // 20
}

{ // function decorator
  const debounce = (callback, timer) => {
    let flag = false;

    return (...args) => {
      if (flag) {
        clearTimeout(flag);
      }

      flag = setTimeout(() => {
        callback(...args);
        flag = false;
      }, timer);
    };
  };

  const res = debounce((str) => console.log('hello'), 2000);
  res();
}