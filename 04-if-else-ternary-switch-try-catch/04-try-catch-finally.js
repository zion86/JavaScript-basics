'use strict';

{
	// try - catch - finally
	// in this case after error js will be work
	try {
		console.log('normal');
		console.log(a); // Referrence: a is not defined
		console.log('result');
	} catch(error) {
		console.log(error.name);
		console.log(error.message);
		console.log(error.stack);
	} finally {
		console.log('this run after try - catch blocks');
	}
	
	console.log('still normal');
}