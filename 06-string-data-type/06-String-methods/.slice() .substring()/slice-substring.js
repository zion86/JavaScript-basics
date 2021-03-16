'use string';

{ // cut subString from String

	const text = 'Hello world';
	console.log('text: ', text);

	// string.slice(idx, numberCharacters);
	const cutSlice = text.slice(0, 5);
	console.log('cutSlice: ', cutSlice);

	// string.substring(idx, numberCharacters);
	const cutSubstring = text.substring(0, 5);
	console.log('cutSubstring: ', cutSubstring);
}

//
{
	const text = 'Hello world';
	let res = null;

	function getWordLength(str, word) {
		const wTo = word.toLowerCase();
		const toLow = str.toLowerCase();

		const startIndex = toLow.indexOf(wTo);
		console.log('startIndex: ', startIndex);

		const getWord = toLow.split(' ')
			.filter(w => w.includes(wTo))
			.join('').length;

		console.log('getWord: ', getWord);
		res = toLow.slice(startIndex, getWord);
		console.log(res);
		return res;

	}

	getWordLength(text, 'hello');
}