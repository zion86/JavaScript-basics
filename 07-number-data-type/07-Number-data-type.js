'use struct';

{
  const num = 7;
  console.log('num: ', num);            // 7

  const numFloat = 7.010;
  console.log('numFloat: ', numFloat);  // 7.01
}

{ // convert variables String, Boolean to Number

  console.log(Number('hello')); 				// NaN
  console.log(Number(true)); 						// 1
  console.log(Number('9.656')); 				// 9.656
  console.log(Number('100')); 					// 100
  console.log(Number('100px')); 				// NaN
}


{ // convert to float number

  console.log(parseFloat('100.23px')); 	// 100.23
  console.log(parseFloat('100px')); 		// 100
  console.log(parseFloat('px100')); 		// NaN
  console.log(parseFloat('100 23px')); 	// 100
}

{ // convert to integer number

  console.log(parseInt(9.656)); 				// 9
  console.log(parseInt('9.656')); 			// 9
  console.log(parseInt('100 px')); 		  // 100
  console.log(parseInt('px 100')); 		  // NaN
}

{ // check is value === Number data type or not

  console.log(Number.isNaN(100)); 			// false
  console.log(Number.isInteger('100')); // false
  console.log(Number.isInteger(100.1)); // false
  console.log(Number.isInteger(100)); 	// true
}

{ // rounding Number

  console.log(Math.round(12.5)); 			  // 12.5 rounds 13, 12.4 rounds 12
  console.log(Math.floor(3.99)); 			  // 3 rounds down
  console.log(Math.ceil(3.01)); 				// 4 rounds up
  console.log(Math.trunc(3.66)); 			  // 3 removes anything after the decimal point without rounding
}

{ // convert String to Number

  console.log(+'100.567'); 							// 100.567
  console.log(+'100'); 									// 100
  console.log(+'100px'); 								// NaN
}

{ // convert Numbet to String

  let num = 7;
  const numToString = num.toString();					// '7'
  console.log('numToString: ', numToString);

  const floatNum = 9.656;

  const floatNum0 = floatNum.toFixed(0);			// '10'
  console.log('floatNum0: ', floatNum0);

  const floatNum1 = floatNum.toFixed(1);			// '9.7'
  console.log('floatNum1: ', floatNum1);

  const floatNum2 = floatNum.toFixed(2);			// '9.66'
  console.log('floatNum2: ', floatNum2);

  const numToLocal = num.toLocaleString();		// '7'
  console.log('numToLocal: ', numToLocal);

  const numToLocalExtend = num.toLocaleString('uk-UK', { style: 'currency', currency: 'UAH' });
  console.log('numToLocalExtend: ', numToLocalExtend); // '7,00 ₴'
}