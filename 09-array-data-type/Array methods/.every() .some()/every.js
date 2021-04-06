'use strict';

// .every() return true if all values in Array === true

{
  const ages = [43, 24, 37, 28, 49, 68, 63, 21, 63, 79];

  const checkEveryAges = ages.every(elem => elem !== 0);
  console.log('checkEveryAges: ', checkEveryAges); // true

  const isGreater20 = ages.every(age => age > 20);
  console.log('isGreater20: ', isGreater20); // true


  // functional programing
  const isGreater50 = age => {
    console.log(age >= 50);
    return age;
  };

  const result = ages.every(isGreater50);
  console.log('result: ', result); // false
}