{
	// .concat(values) об'єднує два і більше масива, повертає новий масив (не мутує)
	const charArray = ['a', 'b', 'c', 'd', 'e'];
	const words = ['html', 'css'];
	const newArray = charArray.concat(words);
	
	console.log(newArray); // [ 'a', 'b', 'c', 'd', 'e', 'html', 'css' ]
	console.log(words); // [ 'html', 'css' ]
	console.log(charArray); // [ 'a', 'b', 'c', 'd', 'e' ]
}