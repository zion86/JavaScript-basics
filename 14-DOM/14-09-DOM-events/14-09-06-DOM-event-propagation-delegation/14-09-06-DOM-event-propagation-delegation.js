/* event propagation order */

// 1 capturing phase            the event goes down to the element      div1 > div2 > div3
// element.addEventListener('click', handler, true);
// element.addEventListener('click', handler, { capture: true });
// event.preventDefault()       disable default behavior
// event.stopPropagation()      can stop the event propagation


// 2 target phase               the event reached the target element
// event.target                 is the 'target' element that initiated the event
// event.currentTarget = this   is the 'current' element where was called event listener


// 3 bubbling phase             the event bubbles up from the element   div3 > div2 > div1
// element.addEventListener('click', handler);
// element.addEventListener('click', handler, false);
// element.addEventListener('click', handler, { capture: false });
// event.preventDefault()       disable default behavior
// event.stopPropagation()      can stop the event propagation


{ // first capture phase then goes bubble phase
  const div = document.querySelectorAll('.div');

  function handlerBubble() {
    alert(`Bubble phase 3: ${this.id}`);
  };

  function handlerCapture() {
    alert(`Capture phase 1: ${this.id}`);
  };

  div.forEach((div) => {
    div.addEventListener('click', handlerBubble);
    div.addEventListener('click', handlerCapture, true);
  });
}


{ // this vs event.target
  const target = document.querySelectorAll('.target');

  function handlerTarget(event) {
    alert(`
      this.id: ${this.id}
      event.target.id: ${event.target.id}
    `);

    // this.id              'target' element that initiated the event
    // event.target.id      'current' element where was called event

    // if (this.id === 'div2') {
    //   event.stopPropagation();
    // }
  }

  target.forEach((div) => {
    div.addEventListener('click', handlerTarget);
  });
}


{ // event.preventDefault(); event.stopPropagation();
  document
    .querySelector('#testForm')
    .addEventListener('reset', (event) => {

      alert('event handler RESET');
      let result = confirm('Clear form?');

      if (!result) {
        event.preventDefault();     // disable default behavior
        event.stopPropagation();    // stop the event propagation
      }
    });
}