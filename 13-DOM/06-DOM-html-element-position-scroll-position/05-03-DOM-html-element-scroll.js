'use strict';

// get htmlElement
const child = document.querySelector('.child');

{ // get scroll position inside htmlElement
  const scrollChildElemY = child.scrollTop = 200;
  const scrollChildElemX = child.scrollLeft = 50;

  console.log('get scroll position in ChildElem Y: ', scrollChildElemY);
  console.log('get scroll position in ChildElem X: ', scrollChildElemX);

  child.addEventListener('scroll', () => {
    console.log(child.scrollTop);
  });

  // elem.addEventListener('click', () => {
  //   child.scrollIntoView(top);
  // });
}