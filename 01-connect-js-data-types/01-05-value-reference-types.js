// reference type (has reference to parent Object)
// object


// value type (copy only value from variable)
// string, number, boolean, null, undefined, bigint


//                            stack                     heap
// primitive                  // value                  // reference
let x = 10;                   // x = 10
let y = x;                    // y = 10

// object                     // reference to Object
let obj1 = { name: 'a' };     // obj1 = address 1       // object { name: 'a' }
let obj2 = obj1;              // obj2 = address 1


// update variables           stack                     heap
// primitive                  // value                  // reference
y = 20;                       // y = 20

// object                     // reference to Object
obj2.name = 'b';              // obj1 = address 1       // object { name: 'b' }
                              // obj2 = address 1