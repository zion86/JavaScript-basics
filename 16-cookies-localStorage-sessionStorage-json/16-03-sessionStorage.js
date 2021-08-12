'use strict';

// sessionStorage save data only during session
// each tab on browser has its own storage
// the limit is 5mb+, depends on the browser

{
  // sessionStorage - key: value;
  window.sessionStorage;

  // ADD data to sessionStorage (key, value)
  sessionStorage.setItem('gloDelivery', 'some data');

  // GET data from sessionStorage (key)
  sessionStorage.getItem('gloDelivery');          // 'some data'

  // REMOVE data from sessionStorage (key)
  sessionStorage.removeItem('gloDelivery');

  // CLEAR ALL DATA FROM SESSIONSTORAGE
  sessionStorage.clear();
}

{
  sessionStorage.setItem('data-string', 'hello');
  // returns String: 'hello'

  sessionStorage.setItem('data-array', ['hello', 1, true]);
  // returns String: 'hello,1,true'

  sessionStorage.setItem('data-object', [{ a: 1 }, { b: 2 }, { c: 3 }]);
  // returns Array: [object Object],[object Object],[object Object]

  sessionStorage.setItem('data-to-json', JSON.stringify([{ a: 1 }, { b: 2 }, { c: 3 }]));
  // returns String: [{"a":1},{"b":2},{"c":3}]

  JSON.parse(sessionStorage.getItem('data-to-json'));
  // returns Array: [{"a":1},{"b":2},{"c":3}]
}