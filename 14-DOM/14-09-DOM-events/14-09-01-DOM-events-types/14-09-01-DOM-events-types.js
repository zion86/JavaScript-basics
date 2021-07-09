'use strict';

// v1 using html attribute event
const btn1 = document.querySelector('.btn1');

// <button class="btn1" onclick="handleBtn1()">Button 1</button>
const handleBtn1 = () => {
  btn1.textContent = 'Button 1 clicked!';
};


{ // v2 using event inside javascript file
  const btn2 = document.querySelector('.btn2');

  // <button class="btn2">Button 2</button>
  const handleBtn2 = () => {
    btn2.textContent = 'Button 2 clicked!';
  };

  const handleBtn2Err = () => {
    btn2.textContent = 'Error';
  };

  btn2.onclick = handleBtn2;
  /* event mistakes */
  // btn2.onclick = handleBtn2Err;         // second event rewrite first event on the same element
  // btn2.onclick = handleBtn2();          // call function and return result from function
}


{ // v3 using event inside javascript file - best practice!!!
  const btn3 = document.querySelector('.btn3');

  // <button class="btn3">Button 3</button>
  const handleBtn3 = () => {
    btn3.textContent = 'Button 3 clicked!';
  };

  btn3.addEventListener('click', handleBtn3);
}