'use strict';

{ // old approach

  // find HTML element in Page by ID
  const findByID = document.getElementById('title');

  // return HTMLCollection Pseudo Array (collection) of elements <tag> name
  const findByTag = document.getElementsByTagName('h1');

  // return first HTML element from pseudo Array
  const findByTagFirstElem = document.getElementsByTagName('h1')[0];

  // return HTMLCollection Pseudo Array (collection) of elements by Class name
  const findByClassName = document.getElementsByClassName('list__item');

  // find first HTML element from pseudo Array
  const findByClassNameFirstElem = document.getElementsByClassName('list__item')[1];

  // return HTMLCollection Pseudo Array (collection) of elements by name attribute
  const findByAttributeName = document.getElementsByName('input-name');
  // <input type="text" name="input-name">
}

{ // new approach

  // find HTML element in Page by ID
  const findByID = document.getElementById('title');

  // find first HTML element by CSS selector
  const findByClassName = document.querySelector('.list__item--active');

  // return NodeList collection, include .forEach() method
  const findAllClassElems = document.querySelectorAll('.list__item');


  // HEMLElem.matches('.css-class-name') method
  // check if HTML element include necessary css class
  // return Boolean true or false
  findAllClassElems.forEach(elem => {
    if (elem.matches('.list__item--active')) {
      console.log(elem.textContent, 'include necessary css class');
    } else {
      console.log(elem.textContent, 'not include necessary css class');
    }
  });

  //HTMLElem.closest('css-class-name') (go up in DOM tree) method
  // check if current or parent HTML element include necessary css class
  // return parentElem or null
  const liItemInUl = document
    .querySelector('.list > .list__item:nth-child(2)')
    .closest('.list');
  console.log('liItemInUl: ', liItemInUl);

  //HTMLElem.contains(HEMLElem) (go down in DOM tree) method
  // check if current HTML element include necessary HTMLElem
  // return true or false
  const ulHaveLi = document
    .querySelector('.list')
    .contains(findByClassName);
  console.log('ulHaveLi: ', ulHaveLi);
}