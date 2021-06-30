// Map is collection with key - value. Key can have various data types

// reference data type
const fn = () => console.log('function');
const arr = ['Alex', 3, false];
const obj = { name: 'John' };


// new Map() create new collection
const mapCollection = new Map();            // Map(0)
const mapColl = new Map([
  ['age', 25],
  [obj, { name: 'Alex' }],
  [false, 'toggle is off'],
]);


// map.set(key, value) create new Map pair: key, value
mapCollection.set('name', 'Alex');
mapCollection.set(true, 'boolean value');

// Map chaining
mapCollection
  .set(fn, 'My function')
  .set(obj, 'John')
  .set(arr, ['array', 'object', 'number']);

// map.get(key) return value or undefined (strict compare '5' === 5)
mapCollection.get(arr);                     // (3) ["array", "object", "number"]
mapCollection.get(true);                    // 'boolean value
mapCollection.get('Name');                  // undefined
mapCollection.get('name');                  // 'Alex'

// map.delete(key) delete element by key
mapCollection.delete(obj);

// map.size return collection length
mapCollection.size;                         // 5

// map.has(key) return true if key exist in collection, else return false
mapCollection.has('name');                  // true
mapCollection.has('Name');                  // false

// map.clear() clear all collection
// mapCollection.clear();


// iterate collection: Object.keys() Object.values() Object.entries() for...of .forEach()
for (const key of mapCollection.keys()) {
  key;
  // 'name'
  // true
  // () => console.log('function')
  // ["Alex", 3, false]
}

for (const value of mapCollection.values()) {
  value;
  // 'Alex'
  // 'boolean value'
  // 'My function'
  // ["array", "object", "number"]
}

for (const entrie of mapCollection.entries()) {
  entrie;
  // ["name", "Alex"]
  // [true, "boolean value"]
  // [ƒ, "My function"]
  // [Array(3), Array(3)]
}

mapCollection.forEach((value, key, map) => {
  `${value} ${key} ${map}`;
});


// Object.fromEntries() create Object from Map collection
const objMap = Object.fromEntries(mapColl);   // {age: 25, [object Object]: {…}, false: "toggle is off"}