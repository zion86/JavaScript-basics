'use strict';

{
  // touchstart
  // touchmove
  // touchend
  // touchenter
  // touchleave
  // touchcancel

  // touches => e.touches
  // targetTouches => e.targetTouches
  // changedTouches =>

  window.addEventListener('DOMContentLoaded', () => {

    const div = document.createElement('div');
    div.style.cssText = `
      width: 300px;
      height: 200px;
      font-size: 2em;
      background-color: tomato;
    `;
    document.body.append(div);

    const text = (e) => {
      e.preventDefault();

      if (e.type === 'touchstart') div.textContent = 'Touch start';
      if (e.type === 'touchmove') div.textContent = 'Touch move';
      if (e.type === 'touchend') div.textContent = 'Touch end';
    };

    div.addEventListener('touchstart', text);
    div.addEventListener('touchmove', text);
    div.addEventListener('touchend', text);
  });
}