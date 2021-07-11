const mouse = document.querySelector('.mouse');
const mouseMove = document.querySelector('.mouse__move');
const mouseClick = document.querySelector('.mouse__click');


{ // v1 mouseover - Mouse pointer comes over
  mouse.addEventListener('mouseover', () => {
    mouseMove.textContent = 'mouseover';
    mouse.style.backgroundColor = '#101010';
  });

  // v2 mousemove - Every mouse move over an element triggers that event
  mouse.addEventListener('mousemove', (event) => {
    mouseMove.textContent = `mousemove x: ${event.clientX} y: ${event.clientY}`;
    mouse.style.backgroundColor = '#303030';
  });

  // v3 mouseout - Mouse pointer comes out from an element
  mouse.addEventListener('mouseout', () => {
    mouseMove.textContent = 'mouseout';
    mouse.style.backgroundColor = '#505050';
  });
}


{ // v1 click - triggers after mousedown and then mouseup over the same element if the left mouse button was used
  mouse.addEventListener('click', (event) => {
    // event.which - mouse button was pressed (1 left, 2 middle, 3 right)
    // event.shiftKey, event.altKey, event.ctrlKey, event.metaKey - returns true or false
    mouseClick.textContent = `${event.type} whitch ${event.which}`;
  });

  // v2 mouse button is clicked/released over an element
  mouse.addEventListener('mousedown', (event) => {
    mouseClick.textContent = `${event.type} whitch ${event.which}`;
  });

  // v3 mouse button is clicked/released over an element
  mouse.addEventListener('mouseup', (event) => {
    mouseClick.textContent = `${event.type} whitch ${event.which}`;
  });
}

// offsetX, offsetY - inside htmlElement
// clientX, clientY - inside browser window
// pageY, pageY - indise page