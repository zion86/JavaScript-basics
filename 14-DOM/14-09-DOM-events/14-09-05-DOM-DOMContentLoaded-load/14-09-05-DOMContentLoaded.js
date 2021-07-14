/*
  <head>
    <script src="14-09-05-DOMContentLoaded.js"></script>

    <!-- a html attribute 'defer' inside script tag is alternative to the 'DOMContentLoaded' -->
    <script src="14-09-05-DOMContentLoaded.js" defer></script>
  </head>
*/


/* v1 - javascript tries to run script before html tree was loaded */
// const p = document.querySelector('p');
// const img = document.querySelector('img');
// p.textContent;                                           // TypeError: Cannot read property 'textContent' of null
// img.style.width;                                         // TypeError: Cannot read property 'style' of null


/* v2 - the browser fully loaded HTML, DOM tree is built */
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('p').textContent;               // 'Lorem, ipsum dolor.'
//   getComputedStyle(document.querySelector('img')).width; // '0px'
// });


/* v3 - the browser fully loaded HTML, DOM tree is built and all the external resources: images, styles etc. */
window.addEventListener('load', () => {
  document.querySelector('p').textContent;                  // 'Lorem, ipsum dolor.'
  getComputedStyle(document.querySelector('img')).width;    // '500px'
});


/* v5 - the user is leaving the page */
// window.addEventListener('unload', () => {
//   console.log('The user is leaving the page');
// });