'use strict';

{ // array literal
  const arrayLiteral = ['ua', 'ru', 'en', 'gr'];

  // array Constructor
  const constructorArray = new Array();                         // []

  const arrayLength = arrayLiteral.length;                      // 4
  const firstArrayElem = arrayLiteral[0];                       // 'ua'
  const lastArrayElem = arrayLiteral[arrayLiteral.length - 1];  // 'gr'

  // change Array length (delete rest Array elements)
  arrayLiteral.length = 2;                                      // [ 'ua', 'ru' ]
}


{ // copy Array or reference Array
  const lang = ['ua', 'ru', 'en', 'gr'];                        // [ 'ua', 'ru', 'en', 'gr' ]

  // reference to old Array (not copy) 
  const arrReference = lang;                                    // [ 'ua', 'ru', 'en', 'gr' ]

  // create new Array with prev Array copy using.slice() method
  const copyArrSlice = lang.slice();                            // ['ua', 'ru', 'en', 'gr' ]

  // create new Array with using Spread operator ...
  const copyArrSpread = [...lang];                              // [ 'ua', 'ru', 'en', 'gr' ]

  // change first Array element
  lang[0] = 'error';


  // new Array reference to the old Array
  console.log('lang: ', lang);                                  // lang: [ 'error', 'ru', 'en', 'gr' ]
  console.log('arrReference: ', arrReference);                  // arrReference: [ 'error', 'ru', 'en', 'gr' ]

  // Array copies
  console.log('copyArrSlice: ', copyArrSlice);                  // copyArrSlice: [ 'ua', 'ru', 'en', 'gr' ]
  console.log('copyArrSpread: ', copyArrSpread);                // copyArrSpread: [ 'ua', 'ru', 'en', 'gr' ]


  // merge 2 Arrays with (...spread) operator
  const simpleArray = ['hello', 'world'];                       // [ 'hello', 'world' ]
  const addToStart = ['first word', ...simpleArray];            // [ 'first word', 'hello', 'world' ]
  const addToEnd = [...addToStart, 'last word'];                // [ 'first word', 'hello', 'world', 'last word' ]
  const merge2Arrays = [...addToStart, ...addToEnd];            // [ 'first word', hello', 'world', 'first word', 'hello', 'world', 'last word' ]
}

{ // Array looping
  const arr = [];
  arr.push(arr);

  // console.log(arr.push(this));
}