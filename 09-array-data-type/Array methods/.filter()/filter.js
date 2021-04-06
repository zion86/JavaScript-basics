'use strict';

// .filter() return new Array with true values (not mutate)

{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let odd = [];
  let add = [];

  const filterNumbers = arr.filter(num => (
    num % 2 === 0
      ? odd = [...odd, num]
      : num % 2 !== 0
        ? add = [...add, num]
        : num
  ));
  console.log('odd: ', odd); // [ 2, 4, 6, 8, 10 ]
  console.log('add: ', add); // [ 1, 3, 5, 7, 9 ]
}

{
  // filter positive numbers
  let arrNumbers = [1, -1, 2, -2, 3];
  let positiveArr = arrNumbers.filter(number => number > 0);
  console.log('positiveArr: ', positiveArr); // 1,2,3
}

{
  // delete Object from Array
  const pilots = [
    { id: 2, name: "Wedge Antilles", faction: "Rebels", },
    { id: 8, name: "Ciena Ree", faction: "Empire", },
    { id: 40, name: "Iden Versio", faction: "Empire", },
    { id: 66, name: "Thane Kyrell", faction: "Rebels", }
  ];

  const deletePilot = pilots.filter(({ id }) => id !== 40);
  console.log('deletePilot: ', deletePilot);
  // [ { id: 2, name: 'Wedge Antilles', faction: 'Rebels' },
  //   { id: 8, name: 'Ciena Ree', faction: 'Empire' },
  //   { id: 66, name: 'Thane Kyrell', faction: 'Rebels' } ]

  // find Object in Array by 'value'
  const findName = pilots.filter(({ name }) => name.toLowerCase().includes('ll'));
  console.log('findName: ', findName);
  // [ { id: 2, name: 'Wedge Antilles', faction: 'Rebels' },
  //   { id: 66, name: 'Thane Kyrell', faction: 'Rebels' } ]

  // filtering list by category
  const filterCategory = pilots.filter(({ faction }) => faction === 'Rebels');
  console.log('filterCategory: ', filterCategory);
  // [ { id: 2, name: 'Wedge Antilles', faction: 'Rebels' },
  //   { id: 66, name: 'Thane Kyrell', faction: 'Rebels' } ]
}

{
  const users = [
    { type: 'admin', name: 'Ivan Ivanov' },
    { type: 'admin', name: 'Irina Sokolova' },
    { type: 'user', name: 'Tatiana Petrenko' },
    { type: 'moderator', name: 'Vasyl Vasylenko' },
    { type: 'user', name: 'Petya Pirofov' },
    { type: 'user', name: 'Boris Ignatiev' },
  ];

  // imperative programing
  let admins = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].type === 'admin') {
      admins = [...admins, users[i]]; // admins.push(users[i])
    };
  };
  // [{type: 'admin', name: 'Ivan Ivanov'}, {type: 'admin', name: 'Irina Sokolova'}]


  // declaretive programing
  const isAdmin = user => user.type === 'admin';
  const adminsList = users.filter(isAdmin);
  console.log('adminsList: ', adminsList);
  // [{type: 'admin', name: 'Ivan Ivanov'}, {type: 'admin', name: 'Irina Sokolova'}]
}