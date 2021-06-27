'use strict';

{
  // get random number from 0 - 3
  const minNumber = 0;
  const maxNumber = 3;

  // not include maxNumber value
  const formMinToMax = Math.floor(Math.random() * maxNumber + minNumber);
  console.log('formMinToMax: ', formMinToMax);

  // include maxNumber value
  const formMinToMaxIncludeMax = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));
  console.log('formMinToMaxIncludeMax: ', formMinToMaxIncludeMax);
}

{ // Math function Math.random() from 0 to 1

  Math.random(); // => Number 0.0648930993906256

  // rundom number generator (min, max) both including
  const rundomNumberGenerator = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
  };
}

{
  // shuffle Array using .sort() method
  const initArray = ['green', 'lime', 'tomato', 'blue'];
  console.log('initArray: ', initArray);

  // get random Item from Array
  const randomItem = 0 + Math.floor((initArray.length - 0 + 1) * Math.random());
  console.log(initArray[randomItem]);

  // shuffle Array
  const shuffledArray = initArray.sort(() => 0.5 - Math.random());
  console.log('shuffledArray: ', shuffledArray);
}