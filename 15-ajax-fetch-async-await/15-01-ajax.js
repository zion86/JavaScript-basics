'use strict';

{ // 'GET' method
  // create new AJAX request to GET or SEND data
  const request = new XMLHttpRequest();
  // initialize request
  // request.open(method, url, async, login, password);
  request.open('GET', 'js/current.json');
  // set request header (what Data type we want get or send to server)
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  // send http request to server
  // request.send(body); existing only in 'POST' method
  request.send();


  // eventListeners: 'readystatechange', 'load'
  // 'load' only when full request is complete
  request.addEventListener('load', () => {
    if (request.status === 200) {
      // get response from server (get data)
      const data = JSON.parse(request.response);
      console.log('data: ', data);

      // output data from server to HTML page
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = 'Error!';
    }
  });

  // - HTTP properties
  // request.status
  // request.statusText
  // request.response
  // request.readyState
}


{ // 'POST' method
  e.preventDefault();

  const statusMessage = document.createElement('div');
  statusMessage.classList.add('status');
  statusMessage.textContent = message.loading;
  form.append(statusMessage);

  const request = new XMLHttpRequest();
  request.open('POST', 'server.php');

  // formData(form)
  // httpRequest() + formData(form) don't use setRequestHeader()
  // request.setRequestHeader('Content-type', 'multipart/form-data');
  // get all data from form inputs (html name attribute)
  // const formData = new FormData(form);

  // JSON
  const object = {};
  request.setRequestHeader('Content-type', 'application/json');
  const formData = new FormData(form);
  formData.forEach((value, key) => object[key] = value);

  const json = JSON.stringify(object);

  request.send(json);

  request.addEventListener('load', () => {
    if (request.status === 200) {
      console.log(request.response);
      statusMessage.textContent = message.success;
      // clear form data
      form.reset();
      // remove notification after xxxx secondr
      setTimeout(() => statusMessage.remove(), 2000);
    } else {
      statusMessage.textContent = message.failure;
    }
  });
}