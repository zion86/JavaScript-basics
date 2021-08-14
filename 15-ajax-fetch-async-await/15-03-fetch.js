'use strict';

/*
  HTTP requests:

  GET       get data from server
  POST      send data to server
  PUT       update data on server
  DELETE    delete data from server

  CONNECT   create connection
  OPTIONS   describe connection parameters
  HEAD      request header without body
  PATCH     update resource partial
*/

/*
  HTTP response status codes:

  1xx informational responses
    101 - Switching Protocol
  2xx successful responses
    200 - OK
    201 - Created
  3xx redirects
    301 - Moved Permanently
    302 - Found
  4xx client errors
    400 - Bad Request
    403 - Forbidden
    404 - Not Found
  5xx server errors
    500 - Internal Server Error
    501 - Not Implemented
*/


{ // es6 fetch()

  // fetch is async!!!
  // 'GET' fetch request from server
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json));

  /*
    fetch response types:

    response.json()
    response.text()
    response.formData()
    response.blob()
    response.arrayBuffer()
  */
}


{ // 'POST' fetch request to server
  fetch('https://jsonplaceholder.typicode.com/posts/', {
    method: 'POST',                             // fetch method
    headers: {                                  // header type
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ name: 'Alex' }),     // convert data to JSON and send to server
  })
    .then((response) => response.json())
    .then((json) => console.log('Success: ', json))
    .catch((error) => console.log('Error: ', error))
    .finally(() => console.log('Do some things...'));
}