'use strict';

// get htmlElement
const child = document.querySelector('.child');

{ // full htmlElement width and height ( border + padding + width )
  const boxFullWidth = child.offsetWidth;
  const boxFullHeight = child.offsetHeight;

  console.log('box full width: ', boxFullWidth);
  console.log('box full height: ', boxFullHeight);
}


{ // get htmlElement border width
  const boxBorderWidth = child.clientLeft;
  const boxBorderHeight = child.clientTop;

  console.log('box border width: ', boxBorderWidth);
  console.log('box border height: ', boxBorderHeight);
}


{ // htmlElement content width and height ( padding + width )
  // not include scrollbar
  const boxContentWidth = child.clientWidth;
  const boxContentHeight = child.clientHeight;

  console.log('box content width not include: ', boxContentWidth);
  console.log('box content height not include: ', boxContentHeight);
}


{ // htmlElement content width and height inside htmlElement
  // include scrollbar
  const fullContentWidth = child.scrollWidth;
  const fullContentHeight = child.scrollHeight;

  console.log('full content width include scrollbar: ', fullContentWidth);
  console.log('full content height include scrollbar: ', fullContentHeight);


  // get htmlElement scroll width 
  // htmlElement.offsetWidth - htmlElement.clientWidth - (htmlElement.clientLeft * 2)
  const scrollbarWidth = child.offsetWidth - (child.clientLeft * 2) - child.clientWidth;
  console.log('get scroll width: ', scrollbarWidth);
}