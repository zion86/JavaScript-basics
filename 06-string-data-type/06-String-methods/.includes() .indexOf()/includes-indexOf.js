'use strict';

{ // string.includes(value, fromIndex) ES6
  // check if String contains specified character and return true or false
  // case sensitive

  const name = 'Alex';
  const checkCharacters = name.includes('Al');
  console.log('checkCharacters: ', checkCharacters);
}

{ // string.indexOf(characters);
  // check if String include value
  // return entry index if existing or -1

  let text = 'Hello world!';

  const result = text.indexOf('!');
  console.log('result: ', result);		// return 11 found ! with index 11
}

{	// Example
  const pets = ['dog', 'monkey', 'cat', 'mouse'];

  // return new Array with filtered list
  const filterPets = pets.filter(animal => animal.includes('e'));
  console.log('filterPets: ', filterPets);
}