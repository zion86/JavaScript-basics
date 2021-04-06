'use strict';

const htmlElem = document.documentElement;  // get HTML element
const headElem = document.head;             // get HEAD element
const bodyElem = document.body;             // get BODY element
const li = document.querySelector('.list__item--active');

// nodeType 1 = Element
// nodeType 3 = Text

// NODE
// ----

// return all child Nodes inside parent element
const bodyChields = bodyElem.childNodes;
// return first child Node nodeType 3 #text from parrent element
const bodyFirstChild = bodyElem.firstChild;
// return last child from parrent elem
const bodyLastChild = bodyElem.lastChild;
// prev Sibling Node
const liPrevNode = li.previousSibling;
// next Sibling Node
const liNextNode = li.nextSibling;
// parent Node
const parentNode = li.parentNode;

// ELEMENT
// -------

// return HTMLCollection with Elements
const bodyElemChilds = bodyElem.children;
// return first child Element <h1></h1>
const bodyFirstChildElem = bodyElem.firstElementChild;
// return last child Element from parrent elem
const bodyListChildElem = bodyElem.lastElementChild;
// prev sibling Element
const liPrevElem = li.previousElementSibling;
// next sibling Element
const linextElem = li.nextElementSibling;
// parent Element
const liParentElem = li.parentElement;



// read parent htmlElement
console.log(child.offsetParent.tagName);