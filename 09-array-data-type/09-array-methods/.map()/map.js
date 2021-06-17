'use strict';

// .map() return new Array with modified data

{
  const cart = [
    { name: 'Widget', price: 9.95 },
    { name: 'Gadget', price: 22.95 },
  ];

  const updatePrices = cart.map(({ price, name }) => ({
    name: name.toLowerCase(),
    price: price * 0.8,
  }));
  console.log('updatePrices: ', updatePrices);
  // [{name: 'widget', price: 7.96}, {name: 'gadget', price: 18.36}]

  const keysOfObject = cart.map(key => key.name);
  console.log('keysOfObject: ', keysOfObject); // [ 'Widget', 'Gadget' ]

  const valuesOfObject = cart.map(value => value.price);
  console.log('valuesOfObject: ', valuesOfObject); // [ 9.95, 22.95 ]

  const updateValueOfObject = valuesOfObject.map(value => value * 0.8);
  console.log('updateValueOfObject: ', updateValueOfObject); // [ 7.96, 18.36 ]

  const lowerCase = keysOfObject.map(key => key.toLowerCase());
  console.log('lowerCase: ', lowerCase); // [ 'widget', 'gadget' ]

  const newCart = lowerCase.map((key, i) => ({
    [key]: updateValueOfObject[i]
  }));
  console.log('newCart: ', newCart); // [{widget: 7.96}, {gadget: 18.36}]

  // destructuring Object inside .map() function
  const displayList = cart.map(({ name, price }) => `${name}: ${price}`);
  console.log('displayList: ', displayList); // [ 'Widget: 9.95', 'Gadget: 22.95' ]

}

{
  const list = [
    { id: 1, name: 'Oleg', category: 'frontend' },
    { id: 2, name: 'Eva', category: 'backend' }
  ];

  // use ...spread, ...rest operators and destructuring
  const updateList = list.map(person => {
    const { name, ...rest } = person;
    return {
      ...rest,
      name: `${name}+1`
    };
  });
  console.log('updateList: ', updateList);
  // [ {id: 1, category: 'frontend', name: 'Oleg+1'}, {id: 2, category: 'backend', name: 'Eva+1'}]

  // count number of unique numbers
  const arr = [1, 3, 4, 1, 1, 3, 4, 5];
  const resultV1 = {};
  const resultV2 = {};

  // V1
  const countV1 = arr.map(el => (
    resultV1[el] === undefined
      ? resultV1[el] = 1
      : ++resultV1[el]
  ));
  console.log('resultV1: ', resultV1); // { '1': 3, '3': 2, '4': 2, '5': 1 }

  // V2
  const countV2 = arr.map(el => resultV2[el] = resultV2[el] + 1 || 1);
  console.log('countV2: ', countV2); // { '1': 3, '3': 2, '4': 2, '5': 1 }

  // V3
  const countV3 = arr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  console.log('countV3: ', countV3); // { '1': 3, '3': 2, '4': 2, '5': 1 }
}

{
  const arr = [
    ['Oleg', null],
    [null, 'Oleg'],
    ['John', 'Alex']
  ];


  function filterList(arr, filterName) {
    if (filterName === '') {
      console.log(arr);
    } else {
      const filterByName = name => name === filterName ? name : null;
      const filteredArr = arr.map(row => row.map(filterByName));
      console.log('filteredArr: ', filteredArr);
    }
  };

  filterList(arr, 'Alex');
}