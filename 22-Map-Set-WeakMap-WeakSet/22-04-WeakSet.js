let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
let alex = { name: "Alex" };


// not iterable
// new WeakSet() take only Object, Array or Function as a key (reference data type)
const weakSet = new WeakSet();

// weakSet.add(value) add value to the WeakSet collection
weakSet
  .add(alex)
  .add(john)
  .add(pete)
  .add(john);

// weakSet.has(value) return true if key exist in collection, else return false
weakSet.has(mary);                          // false
weakSet.has(alex);                          // true

// weakSet.delete(value) delete element by value
weakSet.delete(alex);

// clear memory by garbage collector when objects will be empty
john = null;
pete = null;

// clear WeakSet by garbage collector
weakSet;                                     // No properties