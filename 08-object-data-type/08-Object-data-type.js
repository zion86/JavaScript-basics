{ // create Object literal
	const options = {
	// key: value
		name: 'text',
		width: 1024,
		colors: {
			bg: 'red',
			color: 'black',
			numbers: [1, 2],
		},
		// create es5 Object method makeTest
		makeTest: function() {
			console.log('Test');
		},
		// create es6 Object method makeTest
		makeTest1() {
			console.log('Test 1');
		},
	};
	
	// read values from Object
	console.log(options.name);									// text
	console.log(options.colors.bg);							// red
	console.log(options['name']);								// text
	console.log(options['colors']['bg']);				// red
	
	// run Object method
	options.makeTest();
	
	// destructuring Object
	// v1
	const { bg, color } = options.colors;				// red, black
	// v2
	const { colors: { bg, color } } = options;	// red, black
	// v3
	const { colors: { numbers: [first, last] } } = options; // 1, 2
	
	// delete value from Object
	delete options.width;
}


{
	const mainObj = {
		a: 2,
		b: {
			c: 3
		},
		testPass; 'xxx',
		test: 'test field',
	};

	const addObj = {
		d: 1,
		e: {
			f: 7
		},
		testPass: 'oox',
	};

	// Object shallow copy with Object.assign
	const copyObjAssign = Object.assign({}, mainObj);
	console.log('copyObjAssigh: ', copyObjAssign);			// copyObjAssign:  { a: 2, b: { c: 3 } }

	// Object copy with Spread operator ...
	const copyObjSpread = { ...mainObj };
	console.log('copyObjSpread: ', copyObjSpread);			// copyObjSpread:  { a: 2, b: { c: 3 } }


	// merge 2 Objects with Object.assign
	const mergeObjAssign = Object.assign({}, mainObj, addObj);
	console.log('mergeObjAssign: ', mergeObjAssign);		// mergeObjAssign:  { a: 2, b: { c: 3 }, d: 1, e: { f: 7 } }

	// merge 2 Objects with ...spread operator
	const mergeObjSpread = { ...mainObj, ...addObj };
	console.log('mergeObjSpread: ', mergeObjSpread);		// mergeObjSpread:  { a: 2, b: { c: 3 }, d: 1, e: { f: 7 } }
}

{
	const obj = {
		key: 'value'
	};
	
	// Object not can convert to String [object, Object]
}