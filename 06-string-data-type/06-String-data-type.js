// 'use strict';

{ // String data type

  let userName = 'Alex';                                  // 'Alex'
  const pet = "dog";                                      // 'dog'
  let stringConcatenation = 'A ' + 'B';                   // 'A B'
  let stringLiteral = `18:00:00`;                         // '18:00:00'
  const expressionInterpolation = `${userName} ${pet}`;   // 'Alex dog'

  const escapeCharacter = 'hello \'word\'';               // 'hello 'word''

  userName.toLowerCase();                                 // 'Alex'
  userName = userName.toLowerCase();                      // 'alex'

  const nameLength = userName.length;                     // String length 4

  const getCharacter = userName[2];                       // 'e'
}