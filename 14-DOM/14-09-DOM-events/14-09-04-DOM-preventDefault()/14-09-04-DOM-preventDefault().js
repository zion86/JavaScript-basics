//   const onClick = (event) => {
//     // element where event takes place
//     // Event bubbling - first handle inside nested element and then move up to parent element
//     const target = event.target;
//     const currentTarget = event.currentTarget;
//     console.log('target: ', target);
//     console.log('currentTarget: ', currentTarget);
//   };


// {
//   const link = document.createElement('a');
//   // add HTML attibute
//   link.setAttribute('href', 'http://youtube.com');
//   link.textContent = 'Website';
//   document.body.append(link);

//   const a = document.querySelector('a');
//   const onClick = (event) => {
//     // cancel default browser behavior (open link a[href])
//     event.preventDefault();

//     console.dir(event.target.getAttribute('href'));
//   }
// }


// {
//   // create js event
//   const createEvent = ({ target } = event) => {
//      // const target = event.target;

//      // check if parent html element contain this css-class-name - go up
//      target.closest('.css-class-name');

//      // check if childern html element contain this css-class-name go down
//      target.contains('.css-class-name');

//      // if include current css-name
//      target.matches('.css-class-name');

//   };

//   // add event listener
//   htmlElement.addEventListener('click', createEvent);
// }