
// .reduce() return new Array convert data to one value


{
  const numbers = [2, 3, 1];

  // sum of all values in array
  const sum = numbers.reduce((acc, cur) => acc + cur);
  console.log('sum: ', sum); // 6

  // calculate average in array
  const average = numbers.reduce((acc, cur) => acc + cur) / numbers.length;
  console.log('average: ', average); // 2

  // find max value in array
  const findMax = numbers.reduce((a, b) => a < b ? b : a);
  console.log('findMax: ', findMax); // 3

  // convert array to object
  const obj = numbers.reduce((key, value, i, arr) => ({ ...key, [i]: value }), {});
  // console.log(obj); // { '0': 2, '1': 3, '2': 1 }

  // convert to array of objects
  const convert = numbers.reduce((a, b) => [...a, { [b]: b }], []);
  // console.log(convert); // [ { '2': 2 }, { '3': 3 }, { '1': 1 } ]

  // convert array to object
  const convertToObject = numbers.reduce((object, value) => (
    // object[value] = value;
    // return object;
    { ...object, [value]: value }
  ), {});
  // console.log(convertToObject); // { '1': 1, '2': 2, '3': 3 }
}

const pilots = [
  { id: 2, name: "Wedge Antilles", faction: "Rebels" },
  { id: 8, name: "Ciena Ree", faction: "Empire" },
  { id: 40, name: "Iden Versio", faction: "Empire" },
  { id: 66, name: "Thane Kyrell", faction: "Rebels" }
];

{
  // count id's (numbers)
  const countIds = pilots.reduce((total, { id }) => total + id, 0);
  // console.log(countIds); // 116

  // count numbers of faction - create Object
  const countFactions = pilots.reduce((obj, { faction }) => {
    return { ...obj, [faction]: (obj[faction] || 0) + 1 };
  }, {});
  // console.log(countFactions); // { Rebels: 2, Empire: 2 }

  // count id's - create Object
  const total = pilots.reduce((obj, { id }) => {
    // obj.sum += id; // obj.sum = obj.sum + id
    // return obj;
    return { ...obj, sum: obj.sum + id }
  }, { sum: 0 });
  // console.log(total); // { sum: 116 }

  // convert to object of objects
  const convertToObjectOfObjects = pilots.reduce((obj, value) => {
    return { ...obj, [value.id]: value };
  }, {});
  // console.log(convertToObjectOfObjects);
  // { '2': { id: 2, name: 'Wedge Antilles', faction: 'Rebels' },
  //   '8': { id: 8, name: 'Ciena Ree', faction: 'Empire' },
  //   '40': { id: 40, name: 'Iden Versio', faction: 'Empire' },
  //   '66': { id: 66, name: 'Thane Kyrell', faction: 'Rebels' }
  // }

  // convert array to string
  const convertToString = pilots.reduce((str, { name }) => {
    // str = `${str} ${name}`;
    // return str;
    return `${str} ${name}`;
  }, '');
  // console.log(convertToString); // Wedge Antilles Ciena Ree Iden Versio Thane Kyrell
}

{
  // flating array
  const nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8]];
  const flat = nestedArray.reduce((arr, element) => {
    return [...arr, ...element];
  }, []);
  // console.log(flat); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

  // count each element in Array
  const names = ['banana', 'chery', 'banana', 'apple', 'banana', 'chery'];
  const countItems = names.reduce((obj, value) => {
    !obj[value] ? obj[value] = 1 : obj[value] += 1;
    return obj;
  }, {});
  // console.log(countItems); // { banana: 3, chery: 2, apple: 1 }

  // find uniques elements in array
  const uniqueElements = names.reduce((arr, elem) => {
    return arr.includes(elem) ? arr : [...arr, elem];
  }, []);
  // console.log(uniqueElements); // ['banana', 'chery', 'apple']

  // 
  const foods = [
    { name: 'steak', calories: 800, carbs: 10, fat: 30 },
    { name: 'chips', calories: 300, carbs: 10, fat: 10 },
  ];
  const countValues = foods.reduce((obj, { calories, carbs, fat }) => {
    obj['calories'] += calories;
    obj['carbs'] += carbs;
    obj['fat'] += fat;
    return obj;
  }, { calories: 0, carbs: 0, fat: 0 });
  // console.log(countValues); // { calories: 1100, carbs: 20, fat: 40 }
}

const commentsTree = [
  {
    id: 1,
    text: 'Recursion is fun!',
    comments: [
      {
        id: 2,
        text: 'Yes, indeed!',
        comments: [
          {
            id: 3,
            text: 'Yaaazzz! I agree with you guys',
            comments: [
              { id: 11, text: '😁' },
              { id: 13, text: '😂' },
            ]
          },
        ]
      },
      { id: 9, text: 'True' },
    ],
  },
  {
    id: 4,
    text: 'Functional programming is cool!',
    comments: [
      { id: 5, text: 'Yep!' },
    ],
  },
];

const countComments = comments => {
  return comments.reduce((count, { comments }) => (
    comments
      ? count + 1 + countComments(comments)
      : count + 1
  ), 0);
};
// console.log(countComments(commentsTree)); // 8

// Convert time string to seconds
const timeToSeconds = '00:01:40'.split(':').reduce((acc, time) => (60 * acc) + +time);
// console.log(timeToSeconds); // 100 seconds
const timeToMinutes = '00:30:00'.split(':').reduce((acc, time) => ((60 * acc) + +time / 60));
// console.log(timeToMinutes); // 30 minutes
const timeToMin = '02:10'.split(':').reduce((acc, time) => (60 * acc) + +time);
// console.log(timeToMin); // 130 minutes

// count numbers of uniques numbers
const arr = [1, 3, 4, 1, 1, 3, 4, 5];
const countV3 = arr.reduce((acc, el) => {
  acc[el] = (acc[el] || 0) + 1;
  return acc;
}, {});
console.log(countV3); // { '1': 3, '3': 2, '4': 2, '5': 1 }

// --------------------------------------------------------

const company = {
  sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
  development: {
    sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
    internals: [{ name: 'Jack', salary: 1300 }],
    otheSales: {
      seo: [{ name: 'oleg', salary: 1 }]
    }
  },
  react: [{ name: 'eva', salary: 2 }]
};

// const fn = obj => {
//   if (Array.isArray(obj)) {
//     return obj.reduce((prevSum, { salary }) => prevSum + salary, 0);
//   } else {
//     let sum = 0;

//     for (let field in obj) {
//       sum += fn(obj[field]);
//     }

//     return sum;
//   }
// };

// fn(company);

let list = [];

const fn = obj => {
  if (Array.isArray(obj)) {
    return obj.reduce((init, { name }) => [...init, name], []);
  } else {
    for (let field in obj) {
      const company = obj[field];
      list = [...list, ...fn(company)];
    }

    return list;
  }
};

fn(company);

console.log(list);