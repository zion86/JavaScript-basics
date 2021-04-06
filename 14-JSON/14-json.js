'use strict';

{
  const person = {
    name: 'Alex',
    tel: '+380951234567'
  };

  // convert javaScript Object to JSON data for server (POST method)
  const objToJson = JSON.stringify(person);
  console.log('objToJson: ', objToJson); // {"name":"Alex","tel":"+380951234567"}

  // convert JSON data from server to javaScript Object (GET method)
  const jsonToObj = JSON.parse(objToJson);
  console.log('jsonToObj: ', jsonToObj); // { name: 'Alex', tel: '+380951234567' }
}

{
  // deep clone Objects with JSON
  const person1 = {
    name: 'John',
    tel: '+380661234567',
    parents: {
      mom: 'Anna',
      dad: 'Alex'
    }
  };

  // create deep clone Object
  const deepClone = JSON.parse(JSON.stringify(person1));
  console.log('deepClone: ', deepClone);

  // change cloned Object
  deepClone.parents.dad = '';

  console.log('person1: ', person1);
  console.log('deepClone: ', deepClone);
}