'use strict';

{ // array literal
  const arrayLiteral = ['ua', 'ru', 'en', 'gr'];

  // array Constructor
  const constructorArray = new Array();                         // []

	// array length
  const arrayLength = arrayLiteral.length;                      // 4
	
	// get first array element
  const firstArrayElem = arrayLiteral[0];                       // 'ua'
	
	// get last array element
  const lastArrayElem = arrayLiteral[arrayLiteral.length - 1];  // 'gr'

  // change array length (delete rest array elements)
  arrayLiteral.length = 2;                                      // [ 'ua', 'ru' ]
}


{ // copy array or reference array
  const lang = ['ua', 'ru', 'en', 'gr'];                        // [ 'ua', 'ru', 'en', 'gr' ]

  // reference to old array (not copy) 
  const arrReference = lang;                                    // [ 'ua', 'ru', 'en', 'gr' ]

  // create new array with prev array copy using.slice() method
  const copyArrSlice = lang.slice();                            // ['ua', 'ru', 'en', 'gr' ]

  // create new array with using Spread operator ...
  const copyArrSpread = [...lang];                              // [ 'ua', 'ru', 'en', 'gr' ]

  // change first array element
  lang[0] = 'error';


  // new array reference to the old array
  console.log('lang: ', lang);                                  // lang: [ 'error', 'ru', 'en', 'gr' ]
  console.log('arrReference: ', arrReference);                  // arrReference: [ 'error', 'ru', 'en', 'gr' ]

  // Array copies
  console.log('copyArrSlice: ', copyArrSlice);                  // copyArrSlice: [ 'ua', 'ru', 'en', 'gr' ]
  console.log('copyArrSpread: ', copyArrSpread);                // copyArrSpread: [ 'ua', 'ru', 'en', 'gr' ]


  // merge 2 arrays with (...spread) operator
  const simpleArray = ['hello', 'world'];                       // [ 'hello', 'world' ]
  const addToStart = ['first word', ...simpleArray];            // [ 'first word', 'hello', 'world' ]
  const addToEnd = [...addToStart, 'last word'];                // [ 'first word', 'hello', 'world', 'last word' ]
  const merge2Arrays = [...addToStart, ...addToEnd];            // [ 'first word', hello', 'world', 'first word', 'hello', 'world', 'last word' ]
}

{ // array looping
  const arr = [];
  arr.push(arr);

  // console.log(arr.push(this));
}