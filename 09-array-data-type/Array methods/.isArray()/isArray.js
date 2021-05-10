// Array.isArray(value) Перевірка переданого значення на масив Array
// -----------------------------------------------------------------
const isArray = ['hello', 1, false];
const str = 'hello';
const checkArr = Array.isArray(isArray);
const checkStr = Array.isArray(str);
// console.log(checkArr); // true
// console.log(checkStr); // false
