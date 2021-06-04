'use strict';

{ // let
  // localVariable;                               // ReferenceError: Cannot access 'localVariable' before initialization
  let localVariable;
  console.log('localVariable: ', localVariable);  // localVariable: undefined

  localVariable = 'local variable';
  console.log('localVariable: ', localVariable);  // localVariable: local variable

  // let localVariable = '1';                     // SyntaxError: Identifier 'localVariable' has already been declared
}