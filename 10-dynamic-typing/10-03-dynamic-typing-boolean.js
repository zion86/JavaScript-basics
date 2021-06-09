'use strict';

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