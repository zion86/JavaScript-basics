// create object
let user = { name: 'Alex' };            // { name: 'Alex' }
const fn = (s) => console.log(s);

// create reference to the object
let admin = [user];                     // [ { name: 'Alex' } ]

// // clear object
// user = null;                         // null

// array continue referenced to the cleared object
// admin[0];                            // [ { name: 'Alex' } ]
// admin = null;                        // null

// garbage collector will clear objects from memory


// new WeakMap() take only Object, Array or Function as a key (reference data type)
const weakMap = new WeakMap();

// not iterable
// weakMap.set(key, value) create new WeakMap value
// weakMap.set('Alex', 'user');         // Uncaught TypeError: Invalid value used as weak map key
weakMap
  .set(user, 'Alex')                    // WeakMap {{…} => "Alex"}
  .set(fn, 'Hi')                        // WeakMap {ƒ => "Hi", {…} => "Alex"}
  .set(admin, 'John');                  // WeakMap {Array(1) => "John", {…} => "Alex", ƒ => "Hi"}

// weakMap.has(key) return true if key exist in collection, else return false
weakMap.has(user);                      // true

// weakMap.delete(key) delete element by value
weakMap.delete(fn);                     // WeakMap {{…} => "Alex"}


// clear memory by garbage collector when objects will be empty
user = null;
admin = null;

// clear WeakMap by garbage collector
weakMap;                                // No properties