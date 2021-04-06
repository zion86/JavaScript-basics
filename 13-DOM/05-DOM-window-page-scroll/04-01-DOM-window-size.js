'use strict';

// DOM OBJECT WINDOW

// DISPLAY SCREEN SIZE
const screenWidth = window.screen.width;        // display screen width
const screenHeight = window.screen.height;      // display screen height


// WINDOW POSITION
const windowXPosition = window.screenLeft;      // current X window position from left side
const windowYPosition = window.screenTop;       // current Y window position from top side


// FULL WINDOW SIZE + scrollbar + DEV tools
const windowFullWidth = window.outerWidth;      // outer window full width size + DEV tools
const windowFullHeight = window.outerHeight;    // outer window full height size + DEV tools


// INNER WINDOW SIZE + scrollbar - DEV tools
const windowInnerWidth = window.innerWidth;     // inner canvas width, include scrollbar size
const windowInnerHeight = window.innerHeight;   // inner canvas heidht, include scrollbar size

// INNER CANVAS SIZE - scrollbar - DEV tools
const htmlElem = document.documentElement;      // <html> tag
const htmlInnerWidth = htmlElem.clientWidth;    // inner canvas width without scrollbar size
const htmlInnerHeight = htmlElem.clientHeight;  // inner canvas height without scrollbar size


console.log('screen width: ', screenWidth);
console.log('screen height: ', screenHeight);

console.log('window left-X position: ', windowXPosition);
console.log('window top-Y position: ', windowYPosition);

console.log('outer window width size: ', windowFullWidth);
console.log('outer window height size: ', windowFullHeight);

console.log('inner canvas width with scroll size: ', windowInnerWidth);
console.log('inner canvas height with scroll size: ', windowInnerHeight);

console.log('inner canvas width without scroll size: ', htmlInnerWidth);
console.log('inner canvas height without scroll size: ', htmlInnerHeight);