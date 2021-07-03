const arr = [-1, 55, 12, -6, 10, -3, 5];


// functions chaining
const result = arr
  .filter((num) => num >= 5)
  .map((num) => num * 2);

result;                     // [ 110, 24, 20, 10 ]