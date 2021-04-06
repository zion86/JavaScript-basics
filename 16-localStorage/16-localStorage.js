'use strict';

{
	// localStorage: key: value;
	window.localStorage;
	
	// ADD data to localStorage (key, value)
	localStorage.setItem('gloDelivery', 'some data');

	// GET data from localStorage (key)
	localStorage.getItem('gloDelivery');

	// REMOVE data from localStorage (key)
	localStorage.removeItem('gloDelivery');

	// CLEAR ALL DATA FROM LOCALSTORAGE
	localStorage.clear();
}