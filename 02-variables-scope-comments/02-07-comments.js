// single-line comment


/*
  multi-line comment
*/


/**
 * JSDoc comment
 * @param  {...any} args 
 * @returns 
 */
function addNum(...args) {
  return args.reduce((a, b) => a + b, 0);
}