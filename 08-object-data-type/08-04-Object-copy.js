'use strict';

const mainObj = {
  a: 2,
  b: {
    c: 3
  },
  testPass: 'xxx',
  test: 'test field',
};

const addObj = {
  d: 1,
  e: {
    f: 7
  },
  testPass: 'oox',
};

{ // Object shallow copy with Object.assign
  const copyObjAssign = Object.assign({}, mainObj);
  // { a: 2, b: { c: 3 }, testPass: 'xxx', test: 'test field' }

  // Object copy with Spread operator ...
  const copyObjSpread = { ...mainObj };
  // { a: 2, b: { c: 3 }, testPass: 'oox', test: 'test field', d: 1, e: { f: 7 } }

  // deep Object copy
  const deepObjCopy = JSON.parse(JSON.stringify(mainObj));
  // { a: 2, b: { c: 3 }, testPass: 'xxx', test: 'test field' }
}

{ // merge 2 Objects with Object.assign
  const mergeObjAssign = Object.assign({}, mainObj, addObj);
  // { a: 2, b: { c: 3 }, testPass: 'oox', test: 'test field', d: 1, e: { f: 7 } }

  // merge 2 Objects with ...spread operator
  const mergeObjSpread = { ...mainObj, ...addObj };
  // { a: 2, b: { c: 3 }, testPass: 'oox', test: 'test field', d: 1, e: { f: 7 } }

  // Object deep merge
  const deepMerge = JSON.parse(JSON.stringify({ ...mainObj, ...addObj }));
  // { a: 2, b: { c: 3 }, testPass: 'oox', test: 'test field', d: 1, e: { f: 7 } }
}