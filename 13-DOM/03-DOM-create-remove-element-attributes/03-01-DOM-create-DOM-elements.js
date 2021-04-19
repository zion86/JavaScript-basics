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
  const ol = document.createElement('ol');

  // insert HTML elemend in to the end of body tag
  document.body.append(ol);

  // add to the start of the list
  const firstLi = document.createElement('li');
  firstLi.textContent = 'first LI element';
  ol.prepend(firstLi);

  const li = document.createElement('li');
  ol.append(li);

  // add to the end of the list
  const lastLi = document.createElement('li');
  lastLi.textContent = 'Last LI element';
  ol.append(lastLi);

  // add Node before ol tag
  ol.before(document.createElement('p').textContent = 'add text before ol tag');

  // add Node after ol tag
  ol.after(document.createElement('p').textContent = 'add text after ol tag');

  // delete Node element
  // li.remove();

  // replace old HTML Node to new HTML Node
  const p = document.createElement('p');
  p.textContent = 'replace li to p';
  li.replaceWith(p);
}