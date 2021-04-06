'use strict';

const htmlElem = document.documentElement;

// window current scrollbar X, Y position
// window.scrollY == window.scrollTop == window.pageYOffset
const currentWindowScrollXPosition = window.scrollX;
const currentWindowScrollYPosition = window.scrollY;

console.log('current window scroll position X: ', currentWindowScrollXPosition);
console.log('current window scroll position Y: ', currentWindowScrollYPosition);


// <html> current scrollbar X, Y position
const htmlCurrentScrollXPosition = htmlElem.scrollLeft;
const htmlCurrentScrollYPosition = htmlElem.scrollTop;

console.log('html current scroll position X: ', htmlCurrentScrollXPosition);
console.log('html current scroll position Y: ', htmlCurrentScrollYPosition);



// SCROLL BY
// window.scrollBy(PageX, PageY) move Page each xxx px
const btnScrollBy = document.querySelector('.btn-scroll-by');
btnScrollBy.addEventListener('click', () => {
  window.scrollBy(0, 20);
});


// SCROLL TO
// window.scrollTo(PageX, PageY) move Page to required position
const btnScrollTo = document.querySelector('.btn-scroll-to');
const pageCenter = document.documentElement.scrollHeight / 2;

btnScrollTo.addEventListener('click', () => {
  window.scrollTo(0, pageCenter);
});


// SCROLL INTO VIEW
const btnToTop = document.querySelector('.btn-to-top');

//   htmlElem.scrollIntoView(top);            // move htmlElem at the top browser window
//   htmlElem.scrollIntoView(false);          // move htmlElem at the bottom browser window
btnToTop.addEventListener('click', () => {
  document.body.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  });
});