// .concat(arr, ...args)
// merge two or more arrays

const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['html', 'css'];

const newArr1 = arr1.concat(arr2);              // [ 'a', 'b', 'c', 'd', 'e', 'html', 'css' ]
const newArr2 = arr2.concat(arr1, 'react.js');  // [ 'html', 'css', 'a', 'b', 'c', 'd', 'e', 'react.js' ]

arr1;                                           // [ 'a', 'b', 'c', 'd', 'e' ]
arr2;                                           // [ 'html', 'css' ]