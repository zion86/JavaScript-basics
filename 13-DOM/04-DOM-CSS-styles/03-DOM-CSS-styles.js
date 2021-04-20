'use strict';

{
	const firstBox = document.querySelector('.first-box');
	const firstBoxText = document.querySelector('.first-box__text');

	// add inline CSS style to elem
	firstBox.style.backgroundColor = 'tomato';

	// add multiple inline CSS styles
	firstBoxText.style.cssText = `
		padding: 1em; 
		font-size: 2em;
		color: green;
	`;
	
	// read-only css styles from HTML link
  const boxStyles = window.getComputedStyle(htmlElement);
  boxStyles.width; // width: 200px
}


{
	const secondBox = document.querySelector('.second-box');

	// add multiple CSS class names to elem (delete existing class names)
	// secondBox.className = 'alert red'; // old way

	// return preudo Array with class list names
	secondBox.classList; // ['class-name-1', 'class-name-2']

	// length of class attribute
	secondBox.classList.length; // 2

	// return class-name using index from pseudo array
	secondBox.classList.item(0); // 'second-box'

	// add new CSS class to elem (not delete old classes)
	secondBox.classList.add('article', 'create-box');

	// delete one CSS class from elem
	secondBox.classList.remove('alert', 'article');

	// toggle CSS class in element
	secondBox.classList.toggle('for-all');
	
	// check if CSS class exist css-name inside class and return bullean value (true of false)
	secondBox.classList.contains('news');
}