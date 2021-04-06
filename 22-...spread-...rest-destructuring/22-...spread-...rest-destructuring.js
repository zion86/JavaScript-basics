// Object state
const state = {
  tasks: [
    { id: 1, name: 'eat' },
  ],
  development: {
    frontend: ['javascript', 'react.js'],
  },
};


// destructuring Object
let { tasks } = state;
console.log('tasks: ', tasks);

// destructuring default paramiters
const { actions: { counter = 10 } = {} } = state;
console.log('counter: ', counter);

// // nested Object destructuring
const { development: { frontend } } = state;
console.log('frontend: ', frontend);  // frontend:  [ 'javascript', 'react.js' ]

// rename destructured Object key
const { development: { frontend: frontendDevelopment } } = state;
console.log('frontendDevelopment: ', frontendDevelopment);  // frontend:  [ 'javascript', 'react.js' ]

// destructuring Array
const names = [ 'Alex', 'Bob', 'Siri' ];
const [alex, ...restNames] = names;
console.log('alex: ', alex , 'restNames: ', restNames);

// nested Array destructuring
const { development: { frontend: [js, react] } } = state;
console.log('js: ', js);              // js:  javascript
console.log('react: ', react);        // react:  react.js

// using ...spread operator
tasks = [
  ...tasks,
  { id: 2, task: 'read book' },
];


// update Array of Objects using .map()
const newTasks = tasks.map(task =>
  task.name === 'eat' ? { ...task, name: 'Eat pizza' } : task);
console.log('newTasks: ', newTasks);


// create props Object literal
const props = {};

// update props Object
props.name = 'Oleg';                      // { name: 'Oleg' }
props.age = 33;                           // { age: 33 }
props.developer = 'Frontend';             // { developer: 'Frontend' }
console.log({ ...props });                // { name: 'Oleg', age: 33, developer: 'Frontend' }

// ...rest operator
const { age, ...rest } = props;
console.log('age: ', age);                // age:  33
console.log('rest: ', rest);              // rest:  { name: 'Oleg', developer: 'Frontend' }

const arguments = ['one', 2, true, undefined];
const arrowFn = (...args) => console.log(...args);
arrowFn(...arguments);


// js event destructuring
// { target: { name, value } } = event