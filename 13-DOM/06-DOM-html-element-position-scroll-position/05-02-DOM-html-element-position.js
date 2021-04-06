'use strict';

// get htmlElement
const child = document.querySelector('.child');
const relativeBox = document.querySelector('.box-relative');
const fixedBox = document.querySelector('.box-fixed');


{ // position: relative
  console.log('position relative top: ', relativeBox.getBoundingClientRect().top + window.pageYOffset);
  console.log('position relative left: ', relativeBox.getBoundingClientRect().left);

  console.log('position relative offset top: ', relativeBox.offsetTop);
  console.log('position relative offset left: ', relativeBox.offsetLeft);
}


{ // position: fixed ( relative window )
  // elem.getBoundingClientRect().y === elem.offsetTop
  // elem.getBoundingClientRect().x === elem.offsetLeft
  console.log('position fixed Y: ', fixedBox.getBoundingClientRect().y);
  console.log('position fixed X: ', fixedBox.getBoundingClientRect().x);

  console.log('position fixed offset Y: ', fixedBox.offsetTop);
  console.log('position fixed offset X: ', fixedBox.offsetLeft);
}


// {
//   // check if htmlElement visible on Page
//   const isHidden = (elem) => !elem.offsetWidth && !elem.offsetHeight;
//   console.log(isHidden(htmlElement));
// }

// {
//   // function get element coordinates
//   function getCoords(el) {
//     const w = window;
//     const d = document;

//     const box = el.getBoundingClientRect();

//     const sTop = w.pageYOffset || d.documentElement.scrollTop;
//     const sLeft = w.pageXOffset || d.documentElement.scrollLeft;

//     return {
//       top: Math.round(box.top + sTop),
//       left: Math.round(box.left + sLeft)
//     }
//   }
// }