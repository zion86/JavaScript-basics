'use strict';

{ // es6 fetch()

  // fetch is async command !!!
  // 'GET' fetch request from server
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
}

{ // 'POST' fetch request to server
  fetch('https://jsonplaceholder.typicode.com/posts/', {
    method: 'POST',                             // fetch method
    headers: {                                  // header type
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ name: 'Alex' }),     // convert data to JSON and send to server
  })
    .then(response => response.json())
    .then(json => console.log('Success: ', json))
    .catch(error => console.log('Error: ', error))
    .finally(() => console.log('Do some things...'))
}