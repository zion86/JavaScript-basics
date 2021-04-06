// .forEach(callback(element, index, array)) ES6 (заміна циклу for() {})
// ітерація елементів масиву (перебрати по черзі кожен елемент від 0 до х)
// -----------------------------------------------------------------------

const cars = ['opel', 'audi', 'citroen', 'audi', 'mercedes'];
cars.forEach((car, i, arr) => console.log(car, i));
// opel 0
// audi 1
// citroen 2
// audi 3
// mercedes 4