// .findIndex(callback()) ES6
// повертає перший індекс елемента який відповідає уомві
// -----------------------------------------------------
const cars = ['opel', 'audi', 'citroen', 'audi', 'mercedes'];
const findCarIndex = cars.findIndex(car => car === 'audi');
// console.log(findCarIndex); // 2