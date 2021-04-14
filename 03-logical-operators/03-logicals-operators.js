'use strict';

// Javascript logicals operators

{ // || &&

	// && return first false value otherwise return last true value
	console.log('&& operator:', '0' && 1 && 0); 			// return 0 because 0 is first false Boolean value
	console.log('&& operator:', 3 && 2 && true);			// return true because true is last true Boolean value

	// || return first true value otherwise return last false value
	console.log('|| operaor', 0 || 'hello' || NaN);		// return 'hello' because 'hello' is first true value
	console.log('|| operaor', 0 || '' || NaN);				// return NaN because NaN is last false value
}

{ // ! !!

	// convert values to Boolean (true, false) data type
	console.log('!hello', !'hello'); 									// convert to Boolean false
	console.log('!!hello', !!'hello'); 								// convert to Boolean true, because 'hello' is not empty
}

{ // == === != !==

	// compare data types and values
	console.log('"1" == 1', '1' == 1);								// compare only values
	console.log('"1" === 1', '1' === 1);							// compare types and values
}

{ // < <= => >

	// compare value A is greater or less or equal than value B
	console.log('6 < 6', 6 < 6);											// false
	console.log('6 <= 6', 6 <= 6);										// true
	console.log('6 >= 6', 6 >= 6);										// true
	console.log('6 > 6', 6 > 6);											// false
}