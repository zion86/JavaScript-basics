{ // v1 HTML-attribute event
  const btn1 = document.querySelector('.btn1');

  //                      HTML-attribute event
  /* <button class="btn1" onclick="handleBtn1()">Button 1</button> */

  // handler function
  function handlerBtn1() {
    btn1.textContent = 'Button 1 clicked!';
  };
}


{ // v2 DOM property element.onclick = handlerFunc; event can has only one handler function
  const btn2 = document.querySelector('.btn2');

  /* <button class="btn2">Button 2</button> */
  // create handler function
  const handlerBtn2 = () => {
    btn2.textContent = 'Button 2 clicked!';
  };

  // call event
  btn2.onclick = handlerBtn2;
  // btn2.onclick = handlerBtn2();              // 'ERROR' function immediately call event and returns function undefined result
  btn2.onclick = () => {                        // fix behavior above
    btn2.textContent = 'Button 2 clicked!!!';   // second handler function will overwrite handler function above
  };
}


{ // v3 addEventListener element.addEventListener('event_name', handlerFunc);
  const btn3 = document.querySelector('.btn3');

  /* <button class="btn3">Button 3</button> */
  // create handler function
  const handlerBtn3 = () => {
    btn3.textContent = 'Button 3 clicked!';
  };

  // element.addEventListener('event_name', handlerFunc) can use multiple event listeners on the one element
  btn3.addEventListener('click', handlerBtn3);
  btn3.addEventListener('click', () => {
    btn3.textContent += ' multiple events in one element';
  });
}