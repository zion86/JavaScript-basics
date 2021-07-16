/* new F() function constructor create new Object */

const object = {
  prop: 'value',
};

function F(value) {
  // function constructor
  /* this = {}; // (implicitly) */

<<<<<<< HEAD
  this.value = value;

  /* return this; // (implicitly) */
}
=======
// function F(value) {
//   // constructor
//   /* this = {}; // (implicitly) */
>>>>>>> 6e8cd7fc136e3b1dcf4a7a4a633f58bc546441bc


<<<<<<< HEAD
/* prototype by default reference to the F */
// F.prototype = { constructor: F }
console.log(F.prototype);                   // { constructor: f }
console.log(F.prototype.constructor == F);  // true
console.log(F.prototype.constructor);       // F(value) {}

=======
//   /* return this; // (implicitly) */
// }

/* prototype by default reference to F */
// // F.prototype = { constructor: F }
// // console.log(F.prototype.constructor == F); // true
>>>>>>> 6e8cd7fc136e3b1dcf4a7a4a633f58bc546441bc

/* 
  add property to the F.prototype, not overwrite
  the default F.prototype.constructor is preserved
*/
<<<<<<< HEAD
// add property
F.prototype.prop = 'initial value';
// add method
F.prototype.log = function () {
  console.log(this.value);
}
=======
// F.prototype.prop = 'value';
>>>>>>> 6e8cd7fc136e3b1dcf4a7a4a633f58bc546441bc
/* or recreate the constructor property manually */
// F.prototype = {
//   prop: 'initial value',
//   constructor: F,
// };
console.log(F.prototype);                   // { prop: 'initial value', constructor: ƒ }


// F.prototype = object;          // (*) bind function prototype with object
const item = new F('value 1');    // (*) (**)
/* item.__proto__ == object;      //     (**) */

console.log(item.prop);                     // 'initial value'
console.log(item.log());                    // 'value 1'


/* using constructor of existing Object to create new Object */
<<<<<<< HEAD
const nItem = new item.constructor('value 2');
=======
let rabbit2 = new rabbit.constructor("Rab");

// call Parent Object property
rabbit.eats;                    // true
>>>>>>> 6e8cd7fc136e3b1dcf4a7a4a633f58bc546441bc
