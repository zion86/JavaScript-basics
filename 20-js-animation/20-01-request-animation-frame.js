const btn = document.querySelector('button');
const elem = document.querySelector('.elem');

// create animation
function myAnimation() {
  pos++;
  elem.style.top = pos + 'px';
  elem.style.left = pos + 'px';

  if (pos < 300) {
    requestAnimationFrame(myAnimation);
  }
};

// invoke animation
btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

// create id for stop animation
let idAnimation = requestAnimationFrame(myAnimation);

// function stop animation
cancelAnimationFrame(idAnimation);