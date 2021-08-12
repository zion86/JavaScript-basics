// The Set object store unique values of primitive or object references.

const john = { name: "John" };
const pete = { name: "Pete" };
const mary = { name: "Mary" };
const alex = { name: 'Alex' };


// new Set() create new collection
const set = new Set();                      // Set(0) {}
const uniqueNames = new Set(['Alex', 'John', 'John', 'Mary']);  // Set(3) {"Alex", "John", "Mary"}

// set.add(value) add new value to the Set collection
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
set.add(alex);

// set.has(value) return true if value exist in collection, else return false
set.has(mary);                            // true

// set.delete(value) delete element by value
set.delete(alex);

// set.size return collection length
set.size;                                 // 3

// set.clear() clear all collection
// set.clear();                           // Set(0) {}


// iterate collection: set.keys() set.values() set.entries() for...of .forEach()
set.forEach((value, valueAgain, set) => {
  // console.log(value);
  // {name: "John"}
  // {name: "Pete"}
  // {name: "Mary"}
});

for (const value of set) {
  // console.log(value);
  // {name: "John"}
  // {name: "Pete"}
  // {name: "Mary"}
}

for (const value of set.values()) {
  console.log(value);
  // {name: "John"}
  // {name: "Pete"}
  // {name: "Mary"}
}


// Example: get array with unique values
const uniqueValues = new Set([1, 1, false, 'Alex', 4, { name: 'John' }]);
// Set(5) {1, false, "Alex", 4, {…}}