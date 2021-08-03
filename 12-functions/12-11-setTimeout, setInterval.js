'use strict';

// setTimeout(callback, timeout); call function one time after timeout seconds
// setTimeout function calls only one time
{
  // run funcrion after set timeout
  const timerId = setTimeout(function () {
    console.log('Hello');
  }, 2000);


  // run funcrion after set timeout with arguments
  const timerArgId = setTimeout(function (text) {
    console.log(`${text}`);
  }, 3000, 'Hello World!');


  // callback function inside setTimeout()
  const logger = () => console.log('Hello user!');
  // save setTimeout ID to variable
  const timerFnId = setTimeout(logger, 4000);
  // clear setTimeout() function using setTimeout ID
  clearInterval(timerFnId);
}


// global variable
let intervalId;
let i = 0;


// setInterval(callback, timeout) repeat setInterval function each X seconds
// clearInterval(setIntervalID) cancel setInterval function
{
  const logger = () => {
    if (i === 5) {
      console.log(`Stop setInterval function ${i} === 5`);
      // call setInterval ID to clear setInterval function
      clearInterval(intervalId);
    }
    console.log(`counter ${i}`);
    i++;
  };

  // save setInterval ID
  intervalId = setInterval(logger, 500);
}


{
  // recursive setInterval
  // let id = setInterval(function log() {
  //   console.log('Recursive setInterval');
  //   id = setInterval(log, 500);
  // }, 500);
}