'use strict';

// old approach

{
	// print.js
	function print() {
		console.log('Print');
	};
	
	// export function to another file
	module.exports = print;
}


{
	// import print.js file in to the index.js
	// index.js
	const print = require('./modules/print');
	
	// invoke function
	print();
}