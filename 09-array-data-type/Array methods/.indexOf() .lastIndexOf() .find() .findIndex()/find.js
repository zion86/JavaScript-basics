// .find(callback()) ES6
// повертає перше значення елемента масиву\
// яке відповідає умові, якщо не знайдено - то повертає undefined
// --------------------------------------------------------------
const cars = ['opel', 'audi', 'citroen', 'audi', 'mercedes-benz'];
const findCar = cars.find((car, i) => car === 'audi' ? car : null );
// console.log(findCar); // audi 1 audi 3

const numbers = [3, 5, 1, 0, 4, 3];
const find5 = numbers.find(num => num === 3);
// console.log(find5); // 3