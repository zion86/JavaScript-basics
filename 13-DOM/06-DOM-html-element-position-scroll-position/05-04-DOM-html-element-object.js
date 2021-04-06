'use strict';

// get htmlElement
const child = document.querySelector('.child');

// get object with coordinates and demensions in htmlElement
const htmlElemDimension = child.getBoundingClientRect();
console.log('htmlElemDimension: ', htmlElemDimension);