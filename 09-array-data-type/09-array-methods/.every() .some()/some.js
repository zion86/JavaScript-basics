// .some(callback)
// return true if one value === true

const ages = [43, 24, 37, 28, 49, 68, 63, 21, 63, 79];

const is63 = ages.some(age => age >= 63);             // true