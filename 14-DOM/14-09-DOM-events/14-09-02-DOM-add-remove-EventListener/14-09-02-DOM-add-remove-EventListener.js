const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');
const btnCounter = document.querySelector('.btn__counter');


// handler function
const handleCountFunc = () => {
  let counter = btnCounter.textContent;
  btnCounter.textContent = ++counter;

  if (counter === 5) {
    btn.disabled = true;
    btn.textContent = 'addEventListener was removed';

    // remove eventListener
    btn.removeEventListener('click', handleCountFunc);
  }
};


// create new eventListener();
// element.addEventListener('event_name', handlerFunc, useCapture);
btn.addEventListener('click', handleCountFunc);

// 3rd paramiter (called only once) - alternative removeEventListener();
// element.addEventListener('event_name', handlerFunc, { once: true });
btn1.addEventListener('click', () => {
  btn1.textContent = 'End';
  btn1.disabled = true;
}, { once: true });