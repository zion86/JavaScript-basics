// Symbol() is a unique primitive data type identifier

// Symbol() create new unique symbol
const symbol = Symbol();                  // Symbol()


// Symbol('desctiption') add description to the symbol (symbol name)
const id1 = Symbol('idName');             // Symbol(idName)
const id2 = Symbol('idName');             // Symbol(idName)

// symbol.description get 
id1.description;                          // 'idName'

// each symbol is unique
id1 == id2;                               // false


// Symbols don’t auto-convert to a string
// (id1 + '');                            // TypeError: Cannot convert a Symbol value to a string

// symbol.toString() convert to String
id1.toString();                           // 'Symbol(idName)'


// 'hidden' properties
const user = {
  name: 'Alex',
  // square brackets around Symbol
  [symbol]: 'value',                      // not string 'symbol': 'value'
};

// create Symbol 'hidden' object property
const id = Symbol('id');
user[id] = 30;                            // 30

// create string object 'id'
user.id = 40;                             // 40


// Symbols are ignored by for…in, Object.keys()
Object.keys(user);                        // ["name", "id"]
for (const key in user) console.log(key); // 'name', 'id'

// Object.assign copy string and symbol properties
const clone = Object.assign({}, user);    // {name: "Alex", id: 40, Symbol(): "value", Symbol(id): 30}


// Symbol.for(key) global symbol: creating new symbol if it's not exist in global registry

// get global symbol by name, read from the global registry
const userSymbol = Symbol.for('user');    // Symbol(user)
// get name by symbol
Symbol.keyFor(userSymbol);                // 'user'

// read it again (maybe from another part of the code)
const newUserSymbol = Symbol.for('user'); // Symbol(user)

// the same symbol
userSymbol === newUserSymbol;             // true