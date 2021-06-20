function parentFn(word) {
  // nested function visible only inside parent function
  function nestedFn() {
    console.log(`Hello ${word}`);
  }

  nestedFn();
}

parentFn('WORLD');        // 'Hello WORLD'
// nestedFn();            // ReferenceError: nestedFn is not defined