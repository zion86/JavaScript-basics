// .includes(value, fromIndex) ES6 визначає, чи містить Array протрібний елемент
// 
const pets = ['dog', 'monkey', 'cat', 'mouse', 'nonatmat'];

const mouse = pets.includes('mouse');                             // true

// filter and includes пошук потрібних елементів в масиві
const filterPets = pets.filter(animal => animal.includes('at'));  // [ 'cat', 'nonatmat' ]

{ // create filtering list by types
  const data = [
    { id: 1, name: 'HTML', tag: 'basic' },
    { id: 2, name: 'CSS', tag: 'basic' },
    { id: 3, name: 'JS', tag: 'advanced' },
    { id: 4, name: 'ReactJS', tag: 'advanced' },
    { id: 5, name: 'Others frameworks', tag: 'other' },
  ];

  const filterByType = ['basic', 'other'];
  const filteredList = data.filter(item => filterByType.includes(item.tag));
  // [
  //   { id: 1, name: 'HTML', tag: 'basic' },
  //   { id: 2, name: 'CSS', tag: 'basic' },
  //   { id: 5, name: 'Others frameworks', tag: 'other' }
  // ]
}