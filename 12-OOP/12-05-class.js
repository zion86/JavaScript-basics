'use strict';

{ // ES6 Class declaration (superClass)
  class Rectangle {

    // create constructor method
    // invoke after create new Class /* const alex = new User('Alex', 32); */
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

    // create class method
    calcArea() {
      return this.height * this.width;
    }
  };


  // extend superClass with new subClass
  class ColoredRectangleWithText extends Rectangle {

    // create constructor
    constructor(height, width, text, bgColor) {   // extend arguments
      super(height, width);                       // inheritance arguments from superClass

      this.text = text;
      this.bgColor = bgColor;
    }

    // create class method
    showMyProps() {
      console.log(`text: ${this.text}, bgColor: ${this.bgColor}`);
    }

  };

  // create new Object copy from supreClass
  const square = new Rectangle(10, 10);
  square.calcArea();

  // create new Object copy from extended subClass
  const longRegtangle = new ColoredRectangleWithText(10, 100, 'Long Regtangle', 'green');
  longRegtangle.showMyProps();          // text: Long Regtangle, bgColor: green
  longRegtangle.calcArea();             // 1000
}


{ // ES6 Class expression
  const Rectangle = class {

    // create constructor function
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

    // create class method
    calcArea() {
      return this.height * this.width;
    }
  };
}


{ // experimental
  class Counter {
    count = 0;

    increment = () => {
      this.count += Counter.incrementStep;
    }

    static incrementStep = 2;

    static incrementAll = function (arr) {
      arr.forEach((c) => c.increment());
    }
  }

  // work example
  class Counter {
    constructor() {
      this.count = 0;
      this.increment = () => {
        this.count += Counter.incrementStep;
      }
    }
  }

  // create static property
  Counter.incrementStep = 2;

  // create static method
  Counter.incrementAll = function (arr) {
    arr.forEach((c) => c.increment());
  }
}