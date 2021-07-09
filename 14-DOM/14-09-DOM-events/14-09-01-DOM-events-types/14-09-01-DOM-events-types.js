{ // v1 using html attribute event
  const btn1 = document.querySelector('.btn1');

  //                      html event attribute
  // <button class="btn1" onclick="handleBtn1()">Button 1</button>

  // handler function
  function handlerBtn1() {
    btn1.textContent = 'Button 1 clicked!';
  };
}


{ // v2 using property element.onclick = handlerFunc; event can has only one handler function
  const btn2 = document.querySelector('.btn2');

  // <button class="btn2">Button 2</button>
  // handler function
  const handlerBtn2 = () => {
    btn2.textContent = 'Button 2 clicked!';
  };

  // call event
  btn2.onclick = handlerBtn2;
  // btn2.onclick = handlerBtn2();              // function immediately call event and returns function result
  btn2.onclick = () => {                        // fix behavior above
    btn2.textContent = 'Button 2 clicked!!!';   // second handler function rewrite handler function above
  };
}


{ // v3 using element.addEventListener('event name', handlerFunc);
  const btn3 = document.querySelector('.btn3');

  // <button class="btn3">Button 3</button>
  // handler functions
  const handlerBtn3 = () => {
    btn3.textContent = 'Button 3 clicked!';
  };

  // element.addEventListener('event name', handlerFunc) can use multiple events on one element
  btn3.addEventListener('click', handlerBtn3);
  btn3.addEventListener('click', () => {
    btn3.textContent += ' multiple events in one element';
  });
}