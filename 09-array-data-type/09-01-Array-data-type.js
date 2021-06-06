'use strict';

{ // Array constructor
  // .fill(value, start, end(not included)) fill Array with static values
  const constructorArray = new Array(4).fill('A', 1, 3);  // [ empty, 'A', 'A', empty ]

  // Create Array literal
  const lang = ['ua', 'ru', 'en', 'gr'];

  // Array length
  const langLength = lang.length;                         // 4

  const firstElem = lang[0];                              // ua - first element
  const lastElem = lang[lang.length - 1];                 // gr - last element
}


{ // copy Array or reference Array
  const lang = ['ua', 'ru', 'en', 'gr'];
  console.log('lang: ', lang);                            // lang:  [ 'ua', 'ru', 'en', 'gr' ]

  // reference to old Array (not copy)
  const arrReference = lang;
  console.log('arrReference: ', arrReference);            // arrReference:  [ 'ua', 'ru', 'en', 'gr']

  // copy Array with .slice() method
  const copyArrSlice = lang.slice();
  console.log('copyArrSlice: ', copyArrSlice);            // copyArrSlice: ['ua', 'ru', 'en', 'gr']

  // // copy Array with Spread operator ...
  const copyArrSpread = [...lang];
  console.log('copyArrSpread: ', copyArrSpread);          // copyArrSpread:  [ 'ua', 'ru', 'en', 'gr' ]

  // change first Array elem
  lang[0] = 'error';

  // new Array reference to old Array
  console.log('arrReference: ', arrReference);            // arrReference: [ 'error', 'ru', 'en', 'gr' ]
  console.log('copyArrSlice: ', copyArrSlice);            // copyArrSlice: [ 'ua', 'ru', 'en', 'gr' ]
  console.log('copyArrSpread: ', copyArrSpread);          // copyArrSpread: [ 'ua', 'ru', 'en', 'gr' ]


  // merge 2 Arrays with (...spread) operator
  const simpleArray = ['hello', 'world'];                 // [ 'hello', 'world' ]
  const addToStart = ['first word', ...simpleArray];      // [ 'first word', 'hello', 'world' ]
  const addToEnd = [...addToStart, 'last word'];          // [ 'first word', 'hello', 'world', 'last word' ]
  const merge2Arrays = [...addToStart, ...addToEnd];
}

{ // Array looping
	const arr = [];
	arr.push(arr);
}