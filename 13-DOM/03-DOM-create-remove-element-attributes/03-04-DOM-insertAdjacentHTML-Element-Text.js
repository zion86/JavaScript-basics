'use strict';

{ // insert HTML-layout inside HTML
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