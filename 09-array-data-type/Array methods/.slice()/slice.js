// .slice(start, end(not included)) новий масив, який містить копії елементів з поточного масиву
// ---------------------------------------------------------------------------------------------
// вирізає з x позиції по y позицію, не включаючи y, при цьому основний масив не змінюється
const frontend = ['html', 'css', 'js', 'react.js', 'redux'];
const cutElementsFromStart = frontend.slice(1, 3);
// console.log(cutElementsFromStart); // [ 'css', 'js' ]
const cutElementsFromEnd = frontend.slice(-4, -1);
// console.log(cutElementsFromEnd); // [ 'css', 'js', 'react.js' ]
// console.log(frontend); // [ 'html', 'css', 'js', 'react.js', 'redux' ]