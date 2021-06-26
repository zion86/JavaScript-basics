'use strict';

{ // v1

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
}

{ // v2

  // file.js
  function hello() {
    console.log('Hello');
  };
  const print = () => console.log('Print');
  export { hello, print };

  // index.js
  import { hello, print } from './file-1';
}

{ // v3

  // file.js
  export function hello() {
    console.log('Hello');
  };
  export const print = () => console.log('Print');

  // index.js
  import * as fncs from './file-1';
  fncs.hello();
  fncs.print();
}

{ // v4

  // file.js
  function hello() {
    console.log('Hello');
  };
  // export { hello as default };
  export { hello as hi };

  // index.js
  import { hi } from './file-1';
}

{ // v5
  // arrow function: () => {};

  // file.js
  const arrowFunction = () => console.log('default export arrow function');
  export default arrowFunction;

  // index.js
  import arrowFunction from './arrow-function';


  // file.js
  export default () => console.log('default export arrow function'); // 'anonymus function'

  // index.js
  import arrowFunction from './arrow-function';


  // file.js
  export const App = () => console.log('App');

  // index.js
  import { App } from './App';
}

{ // v6

  // file.js
  export { default as App } from './App';
  export * from './apiHelper';

  // index.js
  import { default as App } from './App';
  import { callApi as apiHelper } from '../helpers/apiHelper';
  import { default as App } from './App';
}