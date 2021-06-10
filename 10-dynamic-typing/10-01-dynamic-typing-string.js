'use strict';

{ // String()

  // explicitly developer
  console.log('String(null)', String(null));                    // 'null'
  console.log('String(4)', String(4));                          // '4'

  // implicitly intepreter JavaScript
  console.log('null + ""', null + '');                          // 'null'
  console.log('"" + 5', '' + 5);                                // '5'
  console.log('5 + "5"', 5 + '5');                              // '55'
  console.log('' + [1, 'hello', true]);                         // '1,hello,true'
  console.log('[] + []', [] + []);                              // ''
  console.log('[] + {}', [] + {});                              // '[object Object]'
}