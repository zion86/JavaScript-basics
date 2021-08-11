'use strict';

// localStorage save data unlimited time on device
// the limit is 5mb+, depends on the browser

{
  // localStorage - key: value;
  window.localStorage;

  // ADD data to localStorage (key, value)
  localStorage.setItem('gloDelivery', 'some data');

  // GET data from localStorage (key)
  localStorage.getItem('gloDelivery');

  // REMOVE data from localStorage (key)
  localStorage.removeItem('gloDelivery');

  // CLEAR ALL DATA FROM LOCALSTORAGE
  localStorage.clear();
}

{
  localStorage.setItem('data-string', 'hello');
  // return String: 'hello'

  localStorage.setItem('data-array', ['hello', 1, true]);
  // return String: 'hello,1,true'

  localStorage.setItem('data-object', [{ a: 1 }, { b: 2 }, { c: 3 }]);
  // return Array: [object Object],[object Object],[object Object]

  localStorage.setItem('data-to-json', JSON.stringify([{ a: 1 }, { b: 2 }, { c: 3 }]));
  // return String: [{"a":1},{"b":2},{"c":3}]

  JSON.parse(localStorage.getItem('data-to-json'));
  // return Array: [{"a":1},{"b":2},{"c":3}]
}