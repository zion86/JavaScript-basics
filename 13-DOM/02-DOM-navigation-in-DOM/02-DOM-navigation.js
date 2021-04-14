'use strict';

const htmlElem = document.documentElement;  // get HTML element
const headElem = document.head;             // get HEAD element
const bodyElem = document.body;             // get BODY element
const li = document.querySelector('.list__item--active');

// nodeType 1 = Element
// nodeType 3 = Text


// read parent htmlElement
console.log(li.offsetParent.tagName);


{ // ELEMENT

  const bodyElemChilds = bodyElem.children;
  // return HTMLCollection(4) [h1#title, ul.list.page__list, footer, script, title: h1#title]

  const bodyFirstChildElem = bodyElem.firstElementChild;
  // return first child Element from parent <h1 id="title">Main Title</h1>

  const bodyListChildElem = bodyElem.lastElementChild;
  // return last child Element from parent <script src="02-DOM-navigation.js"></script>

  const liPrevElem = li.previousElementSibling;
  // return prev sibling Element <li class="list__item">Title 1</li>

  const linextElem = li.nextElementSibling;
  // return next sibling Element <li class="list__item">Title 3</li>

  const liParentElem = li.parentElement;
  // return parent Element <ul class="list page__list">...</ul>
}


{ // NODE

  const bodyChields = bodyElem.childNodes;
  // return all child NodeList inside parent element
  // NodeList(8) [text, h1#title, text, ul.list.page__list, text, footer, text, script]

  const bodyFirstChild = bodyElem.firstChild;
  // return #text first child Node nodeType 3 from parent element

  const bodyLastChild = bodyElem.lastChild;
  // return <script src="02-DOM-navigation.js"></script> last child from parent elem

  const liPrevNode = li.previousSibling;
  // return #text prev Sibling Node

  const liNextNode = li.nextSibling;
  // return #text next Sibling Node

  const parentNode = li.parentNode;
  // return parent Node element <ul class="list page__list">...</ul>
}