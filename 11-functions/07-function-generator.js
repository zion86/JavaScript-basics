// function generator
// v1
function* generator() {
  yield 'S';
  yield 'c';
  yield 'r';
  yield 'i';
  yield 'p';
  yield 't';
};

// str have referrence to function generator
const str = generator();

console.log(str.next()); // return Object for each iteration
console.log(str.next().value); // return value from current function step
console.log(str.next()); // return Object for each iteration
console.log(str.next()); // return Object for each iteration
console.log(str.next()); // return Object for each iteration
console.log(str.next()); // return Object for each iteration
console.log(str.next()); // return Object for each iteration

// v2 use for loop
function* count(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
};

const counter = count(7);

console.log(counter.next().value); // return 0
console.log(counter.next().value); // return 1
console.log(counter.next().value); // return 2

// v3 use for of loop
function* countForOf(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
};

// run function generator maximum times
for (let j of countForOf(7)) {
  console.log(j);
}