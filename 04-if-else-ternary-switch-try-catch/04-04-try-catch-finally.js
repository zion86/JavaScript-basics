'use strict';

/* v1                     v2                v3
  try {                   try {             try {
    // code where during execution may occur error (exception)
  } catch (error) {       } finally {       } catch (error) {
    // code handles exceptions (if exceptions occur)
  }                       }                 } finally {

                                            }
*/


/*
  Error types:
  Error             error during code execution
  EvalError         error during code execution eval function
  RangeError        the value is out of range
  ReferenceError    reference to a non-existent variable
  SyntaxError       syntax error during code execution at eval function
  TypeError         invalid variable or parameter type
  URIError          invalid paramiters for functions encodeURI or decodeURI
*/


/*
  throw             throw operator generate error

  try {
    let ex = new Error('Error!!!');
    throw ex;
    
    // throw new Error('Error!!!');
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
*/


// try - catch - finally
// in this case after errors javaScript will be work
console.time('parsing');

const jsonWithError = `{ "name": "John", "age" = 30 }`;
const jsonOk = `{ "name": "John", "age": 30 }`;

try {
  console.log('start try block');
  // const badObj = JSON.parse(jsonWithError);
  const obj = JSON.parse(jsonOk);
  console.log('end try block');
} catch (error) {
  console.log('catch block');
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
} finally {
  // block code which will be performed
  console.log('finally block runs after try - catch blocks');
  console.timeEnd('parsing');
}
console.log('end of script');