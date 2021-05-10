// .splice(start, end, value) добавляє та видаляє елементи масива,змінює масив (мутує)--------------------------------------------------------------------------------------
const brands = ['Nokia', 'Apple', 'Samsung', 'Xiaomi'];

// Вирізає вказані елементи з масиву з x по y включаючи y
// ------------------------------------------------------
const cutBrands = brands.splice(2, 3);
// console.log(cutBrands); // [ 'Samsung', 'Xiaomi' ]
// console.log(brands); // [ 'Nokia', 'Apple' ]

// Вставляєм новий елемент на початок масиву
// -----------------------------------------
brands.splice(0, 0, 'Huawei');
// console.log(brands); // [ 'Huawei', 'Nokia', 'Apple' ]

// Вставляєм новий елемент в кінець масиву
// ---------------------------------------
brands.splice(brands.length, 0, 'google');
// console.log(brands); // [ 'Huawei', 'Nokia', 'Apple', 'google' ]

// Вирізає вказаний елемент з масиву з x по y включаючи y та вставляє новий елемент
// --------------------------------------------------------------------------------
const newCutBrands = brands.splice(2, 1, 'Motorola');
// console.log(newCutBrands); // [ 'Apple' ]
// console.log(brands); // [ 'Huawei', 'Nokia', 'Motorola', 'google' ]