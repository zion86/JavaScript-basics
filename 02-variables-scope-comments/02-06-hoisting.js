'use strict';

// var, function declaration has 'hoisting'

{
	// var 'hoisting' can invoke variable before creating
	globalVariable;																		// undefined
	var globalVariable;                               // undefined
	globalVariable = 'assigning data to a variable';  // 'assigning data to a variable'
}


{
	// function declaration 'hoisting' can invoke function before creating
	globalFunction();                                 // function exist before declaration

	function globalFunction() {
		console.log('I"m global function');
	};
}