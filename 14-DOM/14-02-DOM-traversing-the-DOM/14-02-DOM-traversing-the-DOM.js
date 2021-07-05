'use strict';

// Element nodeType 1 = Element             // <p></p>
// Element nodeType 3 = Text                // 'some text'
// Element nodeType 8 = Comment             // <!-- html comment -->

const htmlElem = document.documentElement;  // <html> element
const headElem = document.head;             // <head> element
const bodyElem = document.body;             // <body> element

const li = document.querySelector('.list__item--active');

{ // ELEMENT nodeType

  // element.children
  // returns a live HTMLCollection which contains all of the child elements of the element
  const bodyElemChildren = bodyElem.children;
  // HTMLCollection(4) [h1#title, ul.list.page__list, footer, script, title: h1#title]

  // element.firstElementChild
  // returns first child Element from parent
  const bodyFirstChildElem = bodyElem.firstElementChild;
  // <h1 id="title">Main Title</h1>

  // element.lastElementChild
  // returns last child Element from parent
  const bodyListChildElem = bodyElem.lastElementChild;
  // <script src="14-02-DOM-traversing-the-DOM.js"></script>

  // element.previousElementSibling
  // returns prev sibling Element
  const liPrevElem = li.previousElementSibling;
  // <li class="list__item">Title 1</li>

  // element.nextElementSibling
  // returns next sibling Element
  const linextElem = li.nextElementSibling;
  // <li class="list__item">Title 3</li>

  // element.parentElement
  // returns parent Element with nested elements
  const liParentElem = li.parentElement;
  // <ul class="list page__list">...</ul>

  // element.tagName
  // read <tag> in parent element
  const tagParentElem = li.offsetParent.tagName;
  // BODY
}


{ // NODE nodeType

  // element.childNodes
  // return all child NodeList inside parent element
  const bodyChields = bodyElem.childNodes;
  // NodeList(10) [text, h1#title, text, ul.list.page__list, text, footer, text, comment, text, script]

  // element.firstChild
  // return #text first child Node nodeType 3 from parent element
  const bodyFirstChild = bodyElem.firstChild;
  // #text

  // element.lastChild
  // returns the last child of the node
  const bodyLastChild = bodyElem.lastChild;
  // <script src="14-02-DOM-traversing-the-DOM.js"></script>

  // element.previousSibling
  // returns #text prev Sibling Node
  const liPrevNode = li.previousSibling;
  // #text

  // element.nextSibling
  // returns #text next Sibling Node
  const liNextNode = li.nextSibling;
  // #text

  // element.parentNode
  // returns parent Node element
  const parentNode = li.parentNode;
  // <ul class="list page__list">...</ul>
}