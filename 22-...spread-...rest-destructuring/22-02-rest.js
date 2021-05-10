// pack elements to Array []
// destructuring Array, Object

{ // ...rest operator in function
  const addNumbers = (...args) => {                      // ...rest operator
    console.log(args);                                   // [1, 2, 3]
    return args.reduce((prev, curr) => {
      return prev + curr;
    });
  };
  addNumbers(1, 2, 3);                                   // 6
}

{ // ...rest operator in function
  const addNumbers1 = (initArg = 10, ...restArgs) => {   // ...rest operator
    console.log(initArg, restArgs);                      // [1, 2, 3]
    return restArgs.reduce((initArg, curr) => {
      return initArg + curr;
    }, initArg);
  };
  console.log(addNumbers1(100, 1, 2, 3));                // 6
}