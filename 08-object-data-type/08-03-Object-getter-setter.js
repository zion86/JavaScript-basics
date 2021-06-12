'use strict';

{ // Object getter, setter
  const person = {
    userName: 'John',
    userSurName: 'Doe',
    age: 35,

    // get value from Object
    get fullName() {
      return `${this.userName} ${this.userSurName}`;
    },

    // set new value in Object
    set fullName(value) {
      [this.userName, this.userSurName] = value.split(' ');
    },
  };

  // invoke Object method
  // person.fullName()

  // similar with read Object property
  // person.fullName

  // get value (read only)
  person.fullName;                      // 'John Doe'

  // change value
  person.fullName = 'Alice Pitter';     // 'Alice Pitter'
}