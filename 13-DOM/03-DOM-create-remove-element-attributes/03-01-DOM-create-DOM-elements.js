'use strict';

{ // v1
  // create new HTML element in page
  const ul = document.createElement('ul');

  // insert HTML elemend in to the end of body tag
  document.body.append(ul);

  // create text Node
  const text = document.createTextNode('add text to page');

  for (let i = 0; i < 3; i++) {
    // create new elem
    const li = document.createElement('li');

    // add text to existing elem
    li.textContent = i;

    // add children to parent
    ul.append(li);
  }
}


{ // v2
  // create new HTML element in page
  const ol = document.querySelector('ol');

  // add to the begin of the list
  const firstLiElem = document.createElement('li');
  firstLiElem.textContent = 'first <li> element';
  ol.prepend(firstLiElem);

  // add to the end of the list
  const lastLiElem = document.createElement('li');
  lastLiElem.textContent = 'last <li> element';
  ol.append(lastLiElem);

  // add Element before ol tag
  const pBeforeOl = document.createElement('p');
  pBeforeOl.textContent = 'add <p> before <ol>';
  ol.before(pBeforeOl);

  // add Element after ol tag
  const pAfterOl = document.createElement('p');
  pAfterOl.textContent = 'add <p> after <ol>';
  ol.after(pAfterOl);

  // delete Element element
  firstLiElem.remove();
  lastLiElem.remove();
}


{
  // move <nav> to another place
  const nav = document.querySelector('nav');
  const ol = document.querySelector('ol');

  ol.before(nav);


  // replace old HTML Element to new the HTML Element
  const activeLink = nav.querySelector('.active');
  const a = document.createElement('a');

  a.href = '#!';
  a.textContent = 'New address';
  activeLink.replaceWith(a);
}