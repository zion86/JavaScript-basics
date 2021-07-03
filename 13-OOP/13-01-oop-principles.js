{ // incapsulation
  function ParentObject() {

    // privat method
    const privatMethod = function () {
      console.log('Closed method!');
    };

    // public method
    this.publicMethod = function () {
      console.log('Open method!');

      // call privat method
      privatMethod();
    };
  }

  const childObject1 = new ParentObject();
  childObject1.publicMethod();          // Open method! Closed method!
  // childObject1.privatMethod();       // TypeError: childObject1.privatMethod is not a function
}


{ // inheritance
  // base function constructor Parent Object
  function Human() {
    this.name = name;
    this.talk = function () {
      console.log(`Hello my name is ${this.name}`);
    };
  }

  // derivative of a function
  function Student(name) {
    this.name = name;
    this.school = "CBS school";
  }

  function Worker(name) {
    this.name = name;
    this.speciality = "Software developer";
  }

  // create instance from Parent Object
  const human = new Human('name');

  // create inheritance Student, Worker from Parent Object
  Student.prototype = human;            // human is a prototype for Student
  Worker.prototype = human;             // human is a prototype for Worker

  // create instance of Parent Object
  const alex = new Student('Alex');     // Student {name: "Alex", school: "CBS school"}
  const andrew = new Worker('Andrew');  // Worker {name: "Andrew", speciality: "Software developer"}

  // using mathods from Parent Object
  alex.talk();                          // Hello my name is Alex
  andrew.talk();                        // Hello my name is Andrew
}


{ // polymorphism
  // base function constructor Parent Object
  function Human() {
    this.name = name;
    this.talk = function () {
      console.log(`Hello my name is ${this.name}`);
    };
  }

  // derivative of a function
  function Student(name) {
    this.name = name;
    this.school = "CBS school";
  }

  function Worker(name) {
    this.name = name;
    this.speciality = "Software developer";

    // reassign method in instance (will not use Parent Object method .talk())
    this.talk = function () {
      console.log(`Привіт, мене звати ${this.name}`);
    };
  }

  // create instance from Parent Object
  const human = new Human('name');
  // human.talk();

  // create inheritance Student, Worker from Parent Object
  Student.prototype = human;            // human is a prototype for Student
  Worker.prototype = human;             // human is a prototype for Worker

  // create instance of Parent Object
  const alex = new Student('Alex');     // Student {name: "Alex", school: "CBS school"}
  const andrew = new Worker('Andrew');  // Worker {name: "Andrew", speciality: "Software developer"}

  // using mathods from Parent Object
  alex.talk();                          // 'Hello my name is Alex'
  andrew.talk();                        // 'Привіт, мене звати Andrew'
}