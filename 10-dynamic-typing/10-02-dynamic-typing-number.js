'use strict';

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