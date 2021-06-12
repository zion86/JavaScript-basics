'use struct';

// integer number
const num = 7;                          // 7

// float number
const numFloat = 7.0100;                // 7.01


{ // convert variables String, Boolean to Number

  console.log(Number('100'));           // 100
  console.log(Number('10.100'));        // 10.1
  console.log(Number('009.65600'));     // 9.656
  console.log(Number(true));            // 1
  console.log(Number(false));           // 0
  console.log(Number('hello'));         // NaN
  console.log(Number('100px'));         // NaN
}


{ // convert to float number

  console.log(parseFloat('100.23px'));  // 100.23
  console.log(parseFloat('100.100px')); // 100.1
  console.log(parseFloat('101000px'));  // 101000
  console.log(parseFloat('0010 23px')); // 10
  console.log(parseFloat('px100'));     // NaN
}

{ // convert to integer number

  console.log(parseInt(9.656));         // 9
  console.log(parseInt('090.656'));     // 90
  console.log(parseInt('00100 px'));    // 100
  console.log(parseInt('100100px'));    // 100100
  console.log(parseInt('px 100'));      // NaN
}

{ // check is value === Number data type or not

  console.log(Number.isNaN(100));       // false
  console.log(Number.isInteger('100')); // false
  console.log(Number.isInteger(100.1)); // false
  console.log(Number.isInteger(100));   // true
}

{ // rounding Number

  // 12.5 rounds 13, 12.49 rounds 12
  console.log(Math.round(12.49));       // 12
  console.log(Math.round(12.5));        // 13

  // rounds down
  console.log(Math.floor(3.99));        // 3

  // rounds up
  console.log(Math.ceil(3.01));         // 4

  // removes anything after the decimal point without rounding
  console.log(Math.trunc(3.66));        // 3
}

{ // convert String to Number

  console.log(+'100.567');              // 100.567
  console.log(+'100');                  // 100
  console.log(+'100px');                // NaN
}

{ // convert Numbet to String

  let num = 7;
  const numToString = num.toString();       // '7'

  const floatNum = 9.656;
  const floatNum0 = floatNum.toFixed(0);    // '10'
  const floatNum1 = floatNum.toFixed(1);    // '9.7'
  const floatNum2 = floatNum.toFixed(2);    // '9.66'

  const numToLocal = num.toLocaleString();  // '7'
  const numToLocalExtend = num.toLocaleString('uk-UK', {
    style: 'currency',
    currency: 'UAH'
  });                                       // '7,00 ₴'
}