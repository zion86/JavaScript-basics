const btn = document.querySelector('.btn');

const handler = (event) => {
  console.log(event);
  // MouseEvent {isTrusted: true, screenX: 106, screenY: 94, clientX: 106, clientY: 23, …}
};

btn.addEventListener('click', handler);