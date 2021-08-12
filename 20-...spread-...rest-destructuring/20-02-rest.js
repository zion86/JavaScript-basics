// rest operator pack elements
// work with Array [], Object {}

{ // ...rest operator in function
  const addNumbers = (...args) => {                      // ...rest operator
    console.log(args);                                   // [arg1, arg2, arg3, ...]

    return args.reduce((prev, curr) => {
      return prev + curr;
    });
  };

  addNumbers(1, 2, 3);                                   // 6
}


{ // ...rest operator in function
  const addNumbers1 = (initArg = 10, ...restArgs) => {   // ...rest operator
    console.log(initArg, restArgs);                      // (initArg, [arg1, arg2, arg3, ...])

    return restArgs.reduce((initArg, curr) => {
      return initArg + curr;
    }, initArg);
  };

  console.log(addNumbers1(100, 1, 2, 3));                // 106
}


{ // ...rest operator in object
  const user = {
    name: 'John',
    lastName: 'Doe',
    age: 33,
    getFullName() {
      return `${this.lastName}`;
    },
  };

  const { name, ...restData } = user;
  restData;                                             // { lastName: 'Doe', age: 33, getFullName: [Function: getFullName] }
  restData.getFullName();                               // 'Doe'
}


{ // ...rest operator in array
  const names = ['John', 'Alex', 'Pitter'];
  const [firstName, ...restNames] = names;
  firstName;                                            // 'John'
  restNames;                                            // [ 'Alex', 'Pitter' ]
}