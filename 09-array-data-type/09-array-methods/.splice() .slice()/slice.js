// .slice(startIndex, endIndex(not included endIndex))
// return Array copy with N elements
const frontend = ['html', 'css', 'js', 'react.js', 'redux'];

const fragmentArray = frontend.slice(3, 5);       // [ 'react.js', 'redux' ]
frontend;                                         // [ 'html', 'css', 'js', 'react.js', 'redux' ]

// return Array copy from the end of Array
const newFragmentArray = frontend.slice(-2);      // [ 'react.js', 'redux' ]