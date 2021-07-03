// Object constructor with 'new' keyword


// create new Object using constructor
const obj = new Object();                               // {}
// add object property
obj.prop = 'user';                                      // { prop: 'user' }
console.log('obj: ', obj.constructor);                  // [Function: Object]


// create new Array using constructor
const arr = new Array();                                // []
console.log('arr: ', arr.constructor);                  // [Function: Array]


// create new Date using constructor
const date = new Date();                                // 2021-06-21T20:00:11.425Z
console.log('date: ', date.constructor);                // [Function: Date]


// create new String using constructor
const str = new String('Hello world');                  // 'Hello world'
// add custom property to the String constructor
str.customProp = 123;                                   // { customProp: 123 }
console.log('str: ', str.constructor);                  // [Function: String]


// create new function using constructor
const func = new Function('x', 'y', 'return x + y');
const result = func(10, 20);                            // 30
console.log('func: ', func.constructor);                // [Function: Function]


// create function constructor
const fnCont = function (x, y) {
  this.x = x;
  this.y = y;
};

const point = new fnCont(5, 10);                        // fnCont { x: 5, y: 10 }
console.log(point.constructor);                         // [Function: fnCont]



// instanceof operator
// The instanceof operator tests the presence of constructor.prototype in object's prototype chain.
obj instanceof Object;                                  // true
obj instanceof Array;                                   // false