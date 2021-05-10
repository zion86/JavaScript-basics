// --------------------------------------------------------------------------
// .sort() .reverse() сортує числа та букви по зростанню або зменшеню (мутує)
// --------------------------------------------------------------------------
const unsortedList = ['c', 'a', 'b', 'f', 'e', 'd'];
const unsortedDigits = [2, 5, 1, 3, 4];
const votes = [
  { title: 'Apple', votes: 1 },
  { title: 'Milk', votes: 2 },
  { title: 'Carrot', votes: 3 },
  { title: 'Banana', votes: 2 },
];

// sort a - z
// ----------
const sortListAcs = unsortedList.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
// console.log(sortListAcs); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// sort z - a
// ----------
const sortListDesc = unsortedList.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
// console.log(sortListDesc); // [ 'f', 'e', 'd', 'c', 'b', 'a' ]

// if a < b return -1 a will be going first
// ----------------------------------------
const sortDigitsAsc = unsortedDigits.sort((a, b) => a - b);
// console.log(sortDigitsAsc); // [ 1, 2, 3, 4, 5 ]

// if b > a return 1 b will be going first
// ---------------------------------------
const sortDigitsDesc = unsortedDigits.sort((a, b) => b - a);
// console.log(sortDigitsDesc); //[ 5, 4, 3, 2, 1 ]

// sort Array of Objects
// ---------------------
const sortVotesTitle = votes.sort((a, b) => (
  a.votes < b.votes ? -1 : a.votes > b.votes ? 1 : 0
    &&
    a.title < b.title ? -1 : a.title > b.title ? 1 : 0
));
// console.log(sortVotesTitle);
// [{title: 'Apple', votes: 1}, {title: 'Milk', votes: 2}, {title: 'Carrot', votes: 3}, {title: 'Banana', votes: 2}]


// Shuffle array using .sort() method
// ----------------------------------
const shuffleArray = [1, 2, 3, 4, 5];
shuffleArray.sort(() => 0.5 - Math.random());
// console.log(shuffleArray); // [ 3, 4, 1, 5, 2 ]
