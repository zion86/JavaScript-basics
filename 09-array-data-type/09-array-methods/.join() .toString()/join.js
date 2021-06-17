// .join('separator') об'єднує всі елементи масиву в один рядок Array > String
// ---------------------------------------------------------------------------

const fruits = ['apple', 'cherry', 'banana'];
const convertToString = fruits.join();
// console.log(convertToString); // apple,cherry,banana

// при потребі можна вказати роздільник '+', ' / ', ' > ' ...
// ----------------------------------------------------------

const convertToStringWithSeparator = fruits.join(' - ');
// console.log(convertToStringWithSeparator); // 'apple - cherry - banana'
