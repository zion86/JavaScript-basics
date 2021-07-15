// new F() function constructor create new Object


// const object = {
//   prop: value,
// };

// function F(value) {
//   // constructor
//   /* this = {}; */

//   this.value = value;

//   /* return this; */
// }

/* prototype by default reference to F */
// // F.prototype = { constructor: F }
// // F.prototype.constructor == F   // true

/* add property to F.prototype not rewrite */
// F.prototype.prop = 'value';
/* or */
// F.prototype = {
//   prop: 'value',
//   constructor: F,
// };

// F.prototype = object;       // (*) bind function prototype with object
// const item = new F();       // (*) (**)
/* item.__proto__ == object;   //     (**) */

/* using constructor of existing Object to create new Object */
// const nItem = new item.constructor(value);


// example
// create Parent Object for inheritance
const animal = {
  eats: true,
};

// create new instance of Parent Object
function Rabbit(name) {
  this.name = name;
}

/* Rabbit prototype by default */
// Rabbit.prototype = { constructor: Rabbit };
// Rabbit.prototype.constructor == Rabbit;

// bind instance with Parent Object for inheritance using prototype (doing once)
Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit");

// check 
rabbit.constructor == Rabbit;   // true

/* using constructor of existing Object to create new Object */
let rabbit2 = new rabbit.constructor("Rab");

// call Parent Object property
rabbit.eats;                    // true
