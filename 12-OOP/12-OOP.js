{
  // create Prototype Object
  const solder = {
    health: 400,
    armour: 100,
    // Prototype method
    sayHello: function () {
      console.log('Say hello');
    }
  };

  // inheritance from Prototype Object

  // v1 deprecated
  // john.__proto__ = solder;

  // v2
  // Object.setPrototypeOf(john, solder);

  // v3
  const john = Object.create(solder);

  // use method from Prototype Object
  john.sayHello();
}