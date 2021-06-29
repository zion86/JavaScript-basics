// prototype inheritance
// __proto__ is getter, setter (read only)


// create parent Object (superClass)
const animal = {

  // properties for all inherited objects
  eats: true,

  // methods for all inherited objects
  walk() {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },
  sleep() {
    // 'this' always corresponds object witch invoke this method
    // rabbit.sleep(); will modify rabbit obj
    // rabbit.isSleeping;     // true
    // animal.isSleeping;     // undefined
    this.isSleeping = true;
  },
};

// instance of parent Object
const rabbit = {
  jumps: true,
  walk () { // own method only for this Obj
    console.log('Rabbit walk');
  }
};

// create inheritance from parent Object
// v1 depicated 
// rabbit.__proto__ = animal;
// v2

// instance of rabbit
let longEar = {
  earLength: 10,
  // create inheritance from rabbit
  __proto__: rabbit
};


longEar // instance of rabbit and parent Object
  earLength
  __proto__
          rabbit // instance of parent Object
            jumps
            walk() // own method!
            __proto__
                    animal // parent Object
                      eats
                      walk() // common method
                      sleep()
                      __proto__
                              Object
                              __proto__
                                      null



// getter, setter inside parent Object
let user = { 
  name: "John",
  surname: "Smith",
  set fullName(val) {
    [this.name, this.surname] = val.split(" ");
  },
  get fullName() {
    return `${this.name} ${this.surname}`; 
  },
};

let admin = { 
  __proto__: user,
  isAdmin: true, 
};

admin.fullName;     // John Smith // getter
admin.fullName = "Alice Cooper";  // setter
admin.name;         // Alice      // getter
admin.surname;      // Cooper     // getter



// returns only own keys, values of object
Object.keys(object);
Object.values(object);

// for..in loops over both own & inherited keys
for(let prop in rabbit) {
  console.log(prop);
}

// combine for..in & Object.hasOwnProperty();
for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  if (isOwn) {
    console.log(`Our: ${prop}`);
  } else {
    console.log(`Inherited: ${prop}`);
  }
}
