'use strict';


{ // let
  // local scope

  // localVariable;                               // ReferenceError: Cannot access 'localVariable' before initialization
  let localVariable;
  console.log('localVariable: ', localVariable);  // localVariable: undefined

  localVariable = 'local variable';
  console.log('localVariable: ', localVariable);  // localVariable: local variable
}