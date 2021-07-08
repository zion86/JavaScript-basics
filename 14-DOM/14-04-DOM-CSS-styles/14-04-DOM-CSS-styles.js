'use strict';

const firstBox = document.querySelector('.first-box');
const firstBoxText = document.querySelector('.first-box__text');
const secondBox = document.querySelector('.second-box');

{ // CSS inline styles element.style

  // CSS property           javaScript
  // color                  color
  // background-color       backgroundColor - camelCasing notation
  // -moz-radial-graient    MozRadialGradient - PascalCasing nota tion

  // add inline CSS style to the element
  firstBox.style.color = 'blue';
  firstBox.style.backgroundColor = 'tomato';
  firstBox.style.border = '5px solid lime';

  // add multiple inline CSS styles
  firstBoxText.style.cssText = `
    padding: 1em; 
    font-size: 2em;
    color: green;
  `;
}


{ // element.classList, element.className

  // returns preudo Array with classList names
  secondBox.classList;                          // DOMTokenList(3) ["second-box", "alert", "for-all", value: "second-box alert for-all"]

  // length of numder classes
  secondBox.classList.length;                   // 3

  // returns class-name using index from pseudo array
  secondBox.classList.item(0);                  // 'second-box'

  // add one or more CSS classes to element (not delete old classes)
  secondBox.classList.add('article', 'create-box');

  // delete one or more CSS class from element
  secondBox.classList.remove('alert', 'article');

  // toggle CSS class in element
  secondBox.classList.toggle('for-all');

  // check if CSS class exist css-name inside class and return boolean value (true of false)
  secondBox.classList.contains('news');         // false


  // add multiple CSS class names to elem (delete existing class names)
  // secondBox.className = 'alert red';         // <div class="alert red"></div>
  // secondBox.className = 'message';           // <div class="message"></div>
}


{ // getComputedStyle(elem, pseudoElem);

  // read-only css styles
  const boxStyles = getComputedStyle(firstBox);
  boxStyles.width;                              // '1348px'
  boxStyles.backgroundColor;                    // 'rgb(255, 99, 71)'
  boxStyles.top;                                // 'auto'

  const pseudoElem = getComputedStyle(firstBoxText, ':selection');
  pseudoElem.backgroundColor;                   // 'rgb(255, 255, 0)'
}