{ // Object copy
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
  console.log('copyObjAssigh: ', copyObjAssign);      // copyObjAssign:  { a: 2, b: { c: 3 } }

  // Object copy with Spread operator ...
  const copyObjSpread = { ...mainObj };
  console.log('copyObjSpread: ', copyObjSpread);      // copyObjSpread:  { a: 2, b: { c: 3 } }


  // merge 2 Objects with Object.assign
  const mergeObjAssign = Object.assign({}, mainObj, addObj);
  console.log('mergeObjAssign: ', mergeObjAssign);    // mergeObjAssign:  { a: 2, b: { c: 3 }, d: 1, e: { f: 7 } }

  // merge 2 Objects with ...spread operator
  const mergeObjSpread = { ...mainObj, ...addObj };
  console.log('mergeObjSpread: ', mergeObjSpread);    // mergeObjSpread:  { a: 2, b: { c: 3 }, d: 1, e: { f: 7 } }
}