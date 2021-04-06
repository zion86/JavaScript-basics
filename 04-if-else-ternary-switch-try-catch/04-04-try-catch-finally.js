'use strict';

// in this case after errors js will be work

{ // try - catch - finally
  try {
    console.log('normal');
    console.log(a);             // Referrence: a is not defined
    console.log('result');
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
  } finally {
    console.log('this run after try - catch blocks');
  }

  console.log('still normal');
}