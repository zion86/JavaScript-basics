'use strict';

const ulElem = document.querySelector('ul');

{ // insert HTML layout inside HTML

  // outside current element at the top
  ulElem.insertAdjacentHTML('beforebegin', '<p>before begin ul element</p>');

  // outside current element at the bottom
  ulElem.insertAdjacentHTML('afterend', '<p>after begin ul element</p>');


  // inside current element at the top
  ulElem.insertAdjacentHTML('afterbegin', '<li>first li inside ul element</li>');

  // inside current element at the bottom
  ulElem.insertAdjacentHTML('beforeend', '<li>last li inside ul element</li>');
}


{ // insert HTMLElement inside HTML
  const li = document.createElement('li');
  li.textContent = 'li element'

  ulElem.insertAdjacentElement('beforebegin', li);  // outside current element at the top
  ulElem.insertAdjacentElement('afterend', li);     // outside current element at the bottom
  ulElem.insertAdjacentElement('afterbegin', li);   // inside current element at the top
  ulElem.insertAdjacentElement('beforeend', li);    // inside current element at the bottom
}

{ // insert text string inside HTML

  // outside current element at the top
  ulElem.insertAdjacentText('beforebegin', '<p>text content outside</p>');

  // outside current element at the bottom
  ulElem.insertAdjacentText('afterend', '<p>text content outside</p>');

  // inside current element at the top
  ulElem.insertAdjacentText('afterbegin', '<li>text content inside</li>');

  // inside current element at the bottom
  ulElem.insertAdjacentText('beforeend', '<li>text content inside</li>');
}