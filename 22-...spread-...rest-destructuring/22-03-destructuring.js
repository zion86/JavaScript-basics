{ // destructuring Object

  const options = {
    key: 'value',
    name: 'text',
    width: 1024,
    colors: {
      bg: 'red',
      color: 'orange',
      numbers: [1, 2],
    },
  };

  // rename destructured Object keys
  const { key: objKeyValue } = options;
  console.log('objKeyValue: ', objKeyValue);  // 'value'

  // Object destructuring with default paramiters
  const { colors = {} } = options;
  console.log('colors: ', colors);            // colors:  { bg: 'red', color: 'orange', numbers: [ 1, 2 ] }

  // nested Object destructuring with default paramiters
  // const { colors: { bg, color } } = options;
  const { colors: { bg = 'yellow', color = 'black' } } = options;
  console.log('color: ', color);              // 'red'
  console.log('bg: ', bg);                    // 'orange'

  const { colors: { numbers: [first, last] } } = options;
  console.log('first: ', first);              // 1
  console.log('last: ', last);                // 2

  // ...rest operator
  const { name, ...restValues } = options;
  console.log('name: ', name);
  // ...spread operator
  console.log('restValues: ', { ...restValues });
}

{ // destructuring Array
  const names = ['Alex', 'john', 'Ali'];

  // ...rest operator
  const [alex, ...restNames] = names;
  console.log('alex: ', alex);                // 'Alex'
  console.log('restNames: ', restNames);      // [ 'john', 'Ali' ]
}

{ // javascript event destructuring
  // { target: { name, value } } = event
}