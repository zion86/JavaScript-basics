// .every(callback)
// return true if all values in Array === true

const ages = [43, 24, 37, 28, 49, 68, 63, 21, 63, 79];

const checkEveryAges = ages.every(elem => elem !== 0);  // true
const isGreater25 = ages.every(age => age >= 25);       // false


// functional programing
const isGreater50 = age => age >= 50;                   // false
const result = ages.every(isGreater50);