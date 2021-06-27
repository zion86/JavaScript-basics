// 'use strict';

{ // String data type

  let userName = 'Alex';                                  // 'Alex'
  const pet = "dog";                                      // 'dog'
  const stringConcatenation = 'A ' + 'B';                 // 'A B'
  const stringLiteral = `18:00:00`;                       // '18:00:00'
  const expressionInterpolation = `${userName} ${pet}`;   // 'Alex dog'
  const templateLiteral = `${5 + 2}`;                     // 7
  const escapeCharacter = 'hello \'word\'';               // 'hello 'word''

  userName.toLowerCase();                                 // 'Alex'
  userName = userName.toLowerCase();                      // 'alex'

  const stringLength = userName.length;                   // 4

  const getCharacter = userName[2];                       // 'e'
}