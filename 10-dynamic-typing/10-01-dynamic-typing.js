'use strict';

{ // String()

  // explicitly developer
  console.log('String(null)', String(null));                    // 'null'
  console.log('String(4)', String(4));                          // '4'

  // implicitly intepreter JavaScript
  console.log('null + ""', null + '');                          // 'null'
  console.log('"" + 5', '' + 5);                                // '5'
  console.log('' + [1, 'hello', true]);                         // '1,hello,true'
}

{ // Number()

  // explicitly developer
  console.log('Number("4")', Number('4'));                      // 4
  console.log('parseInt("16px", 10)', parseInt('16px', 10));    // 16
  console.log('parseFloat("16.04px")', parseFloat('16.04px'));  // 16.04

  // explicitly developer
  console.log('+"4"', +'4.00900');                              // 4.009
  console.log('~~"4.99"', ~~'4.99');                            // 4
  console.log('"5.009" | 0', '5.009' | 0);                      // 5
}

{ // Boolean()
  // false values is:   0, '', "", null, undefined, NaN
  // true values is:    true, 'Hello', 1, { }

  // explicitly developer
  console.log('Boolean("4")', Boolean('4'));                    // true

  // implicitly intepreter JavaScript
  console.log('!"4"', !'4');                                    // false
  console.log('!!"4"', !!'4');                                  // true
  console.log('!""', !'');                                      // true
  console.log('!!""', !!'');                                    // false
}