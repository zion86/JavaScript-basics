'use strict';

{
  // run funcrion after set timeout
  const timerId = setTimeout(function () {
    console.log('Hello');
  }, 2000);

  // run funcrion after set timeout with arguments
  const timerArgId = setTimeout(function (text) {
    console.log(`${text}`);
  }, 3000, 'Hello World!');

  // callback inside setTimeout()
  const logger = () => console.log('Hello user!');
  const timerFnId = setTimeout(logger, 4000);
  // clear setTimeout() function
  clearInterval(timerFnId);
}

// global variable
let intervalId;
let i = 0;

{
  // setInterval repeat function each X seconds
  const logger = () => {
    if (i === 5) {
      console.log(`Stop setInterval function ${i} === 5`);
      clearInterval(intervalId);
    }
    console.log(`counter ${i}`);
    i++;
  };

  intervalId = setInterval(logger, 500);
}

{
  // recursive setInterval
  // let id = setInterval(function log() {
  //   console.log('Recursive setInterval');
  //   id = setInterval(log, 500);
  // }, 500);
}