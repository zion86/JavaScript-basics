// .push(value) .pop(value) .unshift(value) .shift(value) змінюють поточний масив (мутують)
// ----------------------------------------------------------------------------------------
const charArray = ['b', 'c', 'd']; //  ['b', 'c', 'd' ]

// add new element to the end of Array
charArray.push('e', 'f'); // [ 'b', 'c', 'd', 'e', 'f' ]

// delete last element from Array
charArray.pop(); // [ 'b', 'c', 'd', 'e' ]

// add element at start of Array
charArray.unshift('start', 'a'); // [ 'start', 'a', 'b', 'c', 'd', 'e' ]

// delete first element from start of Array
charArray.shift(); // [ 'a', 'b', 'c', 'd', 'e' ]

console.log(charArray);