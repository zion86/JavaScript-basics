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


  // add attribute to htmlElement
  ol.setAttribute('data-attr-name', 'value');
  // check if attribute exists
  ol.hasAttribute('data-attr-name'); // return true or false
  // get attribute value from htmlElem
  ol.getAttribute('data-attr-name'); // return 'value'
  // remove attribute from htmlElem
  ol.removeAttribute('data-attr-name');
  // get collection with list data attributes { name: value }
  ol.attributes;

  // non-standart attributes === user attributer
  // get dataset attribute
  ol.dataset; // return Object with data attribute { key: value }
  // change htmlElement attribute data-order-state === htmlElem.dataset.orderState
  ol.dataset.orderState = 'pendind'; // return 'pending'
}

{ // v3
  // insert HTML-layout inside HTML
  htmlElement.insertAdjacentHTML('beforeBegin', '<p>!</p>');		// outside current element at the top
  htmlElement.insertAdjacentHTML('afterEnd', '<p>!</p>');				// outside current element at the bottom
  htmlElement.insertAdjacentHTML('afterBegin', '<p>!</p>');			// inside current element at the top
  htmlElement.insertAdjacentHTML('beforeEnd', '<p>!</p>');			// inside current element at the botom

  // insert HTML tag inside HTML
  const p = document.createElement('p');
  htmlElement.insertAdjacentElement('beforeBegin', p);					// outside current element at the top
  htmlElement.insertAdjacentElement('afterEnd', p);							// outside current element at the bottom
  htmlElement.insertAdjacentElement('afterBegin', p);						// inside current element at the top
  htmlElement.insertAdjacentElement('beforeEnd', p);						// inside current element at the bottom

  // insert text string inside HTML
  htmlElement.insertAdjacentText('beforeBegin', 'text string');	// outside current element at the top
  htmlElement.insertAdjacentText('afterEnd', 'text string');		// outside current element at the bottom
  htmlElement.insertAdjacentText('afterBegin', 'text string');	// inside current element at the top
  htmlElement.insertAdjacentText('beforeEnd', 'text string');		// inside current element at the bottom
}