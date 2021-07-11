const keyPress = document.querySelector('.key__press');

// order:
// 1 keydown
document.addEventListener('keydown', (event) => {
  keyPress.textContent = `${event.type} keyboard code: ${event.code} key: ${event.key}`;
});

// 2 keyup
document.addEventListener('keyup', (event) => {
  keyPress.textContent = `${event.type} keyboard code: ${event.code} key: ${event.key}`;
});

// 3 keypress
document.addEventListener('keypress', (event) => {
  keyPress.textContent = `${event.type} keyboard code: ${event.code} key: ${event.key}`;
});