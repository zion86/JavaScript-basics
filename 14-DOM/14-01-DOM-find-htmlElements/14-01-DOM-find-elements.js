'use strict';

// find HTML element in Page by ID
const findByID = document.getElementById('title');
// <h1 id="title" data-page-title="Page Title">Main Title</h1>

// find first HTML element by CSS selector
const findByClassName = document.querySelector('.list__item--active');
// <li class="list__item list__item--active">Title 2</li>

// return NodeList collection, includes .forEach() method
const findAllClassElems = document.querySelectorAll('.list__item');
// NodeList(3) [li.list__item, li.list__item.list__item--active, li.list__item]


{ // element.closest('.css-class-name')
  // element.contains('.css-class-name')
  // element.matches('.css-class-name')

  // HTMLelem.closest('css-class-name') (go up in DOM tree) method
  // closestElement is the Element which is the closest ancestor of the selected element.
  // return closestElement or null
  const liItemInUl = document
    .querySelector('.list > .list__item:nth-child(2)')
    .closest('.list');
  // <ul class="list page__list">...</ul >

  //HTMLelem.contains(HTMLElem) (go down in DOM tree) method
  // check if current HTML element includes necessary HTMLElem
  // return true or false
  const ulHaveLi = document
    .querySelector('.list')
    .contains(findByClassName);
  // true

  // HTMLelem.matches('.css-class-name') method
  // check if HTML element includes necessary CSS selector
  // return Boolean true or false
  findAllClassElems.forEach(elem => {
    if (elem.matches('.list__item--active')) {
      console.log(elem.textContent, 'include necessary css class');
    } else {
      console.log(elem.textContent, 'not include necessary css class');
    }
  });
}


{ // old approach

  // find HTML element in Page by ID
  const findByID = document.getElementById('title');
  // <h1 id="title" data-page-title="Page Title">Main Title</h1>

  // return HTMLCollection Pseudo Array (collection) of elements <tag> name
  const findByTag = document.getElementsByTagName('h1');
  // HTMLCollection [h1#title, title: h1#title]

  // return first HTML element from pseudo Array
  const findByTagFirstElem = document.getElementsByTagName('h1')[0];
  // <h1 id="title" data-page-title="Page Title">Main Title</h1>

  // return HTMLCollection Pseudo Array (collection) of elements by css class name
  const findByClassName = document.getElementsByClassName('list__item');
  // HTMLCollection(3) [li.list__item, li.list__item.list__item--active, li.list__item]

  // find first HTML element from pseudo Array
  const findByClassNameFirstElem = document.getElementsByClassName('list__item')[1];
  // <li class="list__item list__item--active">Title 2</li>

  // return HTMLCollection Pseudo Array (collection) of elements by attribute name
  const findByAttributeName = document.getElementsByName('input-name');
  // NodeList [input] <input type="text" name="input-name">
}