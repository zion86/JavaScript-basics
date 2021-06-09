'use strict';

const htmlElem = document.documentElement;        // <html> tag
const bodyElem = document.body;                   // <body> tag


// <html> page width and height include scrollbar size
const pageFullWidth = window.innerWidth;
console.log('page Full Width: ', pageFullWidth);

const pageScrollWidth = htmlElem.scrollWidth;
const pageOffsetWidth = htmlElem.offsetWidth;
const pageScrollHeight = htmlElem.scrollHeight;
const pageOffsetHeight = htmlElem.offsetHeight;


// <body> page width and height without scrollbar size
const bodyScrollWidth = bodyElem.scrollWidth;
const bodyOffsetWidth = bodyElem.offsetWidth;
const bodyScrollHeight = bodyElem.scrollHeight;
const bodyOffsetHeight = bodyElem.offsetHeight;


console.log('page Scroll Width: ', pageScrollWidth);
console.log('page Offset Width: ', pageOffsetWidth);
console.log('page Scroll Height: ', pageScrollHeight);
console.log('page Offset Height: ', pageOffsetHeight);

console.log('body Scroll Width: ', bodyScrollWidth);
console.log('body Offset Width: ', bodyOffsetWidth);
console.log('body Scroll Height: ', bodyScrollHeight);
console.log('body Offset Height: ', bodyOffsetHeight);


{ // get full PAGE height in Chrome / Safari / Opera / Firefox
  const scrollHeight = Math.max(
    bodyElem.scrollHeight, htmlElem.scrollHeight,
    bodyElem.clientHeight, htmlElem.clientHeight,
    bodyElem.offsetHeight, htmlElem.offsetHeight
  );

  console.log('get maximum page height: ', scrollHeight);
}