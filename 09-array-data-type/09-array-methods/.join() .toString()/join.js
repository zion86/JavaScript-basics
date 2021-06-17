// .join('separator')
// об'єднує всі елементи масиву в один рядок Array > String

const fruits = ['apple', 'cherry', 'banana'];
const convertToString = fruits.join();                    // apple,cherry,banana

// separator '+', ' / ', ' > ' ...
const convertToStringWithSeparator = fruits.join(' - ');  // 'apple - cherry - banana'