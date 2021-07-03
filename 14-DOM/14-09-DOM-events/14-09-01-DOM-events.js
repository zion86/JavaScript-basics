const btn = document.createElement('button');
btn.textContent = 'Button';
document.body.append(btn);

{
  let i = 0;

  const onClick = (event) => {
    // element where event takes place
    // елемент в якому відбувається подія
    // Event bubbling - first handle inside nested element and then move up to parent element
    const target = event.target;
    const currentTarget = event.currentTarget;
    console.log('target: ', target);
    console.log('currentTarget: ', currentTarget);

    i++;
    target.textContent = i;

    if (i === 3) {
      btn.textContent = 'Button';

      // remove Event Listener
      btn.removeEventListener('click', onClick);
    }
  };

  // add Event Listener to HTML element
  // listener: 'click', 'keypress'
  // event: 'MouseEvent', 'KeyboardEvent'
  btn.addEventListener('click', onClick);
}

{
  const link = document.createElement('a');
  // add HTML attibute
  link.setAttribute('href', 'http://youtube.com');
  link.textContent = 'Website';
  document.body.append(link);

  const a = document.querySelector('a');
  const onClick = (event) => {
    // cancel default browser behavior (open a[href])
    event.preventDefault();

    console.dir(event.target.getAttribute('href'));
  }

  // 3rd param - alternative removeEventListener
  a.addEventListener('click', onClick, { once: true });
}

// {
//   // create js event
//   const createEvent = ({ target } = event) => {
//     	// const target = event.target;

//     	// check if parent html element contain this css-class-name - go up
//     	target.closest('.css-class-name');

//		 	// check if childern html element contain this css-class-name go down
//     	target.contains('.css-class-name');

//		 	// if include current css-name
//			target.matches('.css-class-name');
			 
//   };

//   // add event listener
//   htmlElement.addEventListener('click', createEvent);
// }