const mouse = document.querySelector('.mouse');
const mouseEvent = document.querySelector('.mouse__event');


// v1 mouseover - Mouse pointer comes over
mouse.addEventListener('mouseover', () => {
  mouseEvent.textContent = 'mouseover';
});

// v2 mousemove - Every mouse move over an element triggers that event
mouse.addEventListener('mousemove', (event) => {
  mouseEvent.textContent = `
    mousemove - x: ${event.clientX} y: ${event.clientY}
  `;
});

// v3 mouseout - Mouse pointer comes out from an element
mouse.addEventListener('mouseout', () => {
  mouseEvent.textContent = 'mouseout';
});


// 'contextmenu'

{
  // 1 mousedown  ===   Mouse button is clicked/released over an element
  // 2 mouseup    ===   Mouse button is clicked/released over an element
  // 3 click      ===   Triggers after mousedown and then mouseup over the same element if the left mouse button was used
}