'use strict';

{
	// file.js 
	export default function App() {
		console.log('App');
	};
	// index.js
	import App from './App';
	
	
	
	// file.js
	export function hello() {
		console.log('Hello');
	};
	// index.js
	import { hello } from './file-1';
	
	
	// v2
	function hello() {
		console.log('Hello');
	};
	const print = () => console.log('Print');
	
	export { hello, print };
	import { hello, print } from './file-1';
	
	
	// v3
	export function hello() {
		console.log('Hello');
	};
	export const print = () => console.log('Print');
	
	import * as fncs from './file-1';
	fncs.hello();
	fncs.print();
	
	
	// v4
	function hello() {
		console.log('Hello');
	};
	
	// export { hello as default };
	export { hello as hi };
	import { hi } from './file-1';
	
	
	// v5 arrow functions () => {};
	const arrowFunction = () => console.log('default export arrow function');
	export default arrowFunction;
	import ArrowFunction from './arrow-function';
	
	export default () => console.log('default export arrow function'); // anonymus function
	import arrowFunction from './arrow-function';
	
	export const App = () => console.log('App');
	import { App } from './App';	
}


{
	// rest
	export { default as App } from './App';
	export * from './apiHelper';
	
	// rest
	import { default as App } from './App';
	import { callApi as apiHelper } from '../helpers/apiHelper';
	import { default as App } from './App';
}