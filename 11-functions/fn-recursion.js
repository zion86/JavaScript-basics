'use strict';

{	// simple recursion
	function sum(n) {				// n times
		if (n === 0) {
			return n;
		} else {
			return sum(n - 1);
		};
	};

	sum(5);
}


{	// tail recursion
	const add = (n, acc = 0) => {
		if (n === 0) return acc;
		return add(n - 1, acc + n);
	};

	console.log(add(3));

	const tail = (n, acc = 0) => {
		while (true) {
			if (n === 0) return acc;
			acc = acc + n;
			n = n - 1;
		}
	};

	console.log(tail(3));
}


{	// v1 function declaration (always GLOBAL variable on TOP)
	function by2(digit, n) {
		let result = 0; // private value

		// multiply result by digit n times in the loop
		for (let i = 0; i < n; i++) {
			result += digit;
		};

		return result;
	};

	by2(2, 9); // 18
}


{ // v2 function declaration (always GLOBAL variable on TOP)
	function by3(digit, n) {
		if (n === 1) {
			return digit
		}
		else {
			return digit + by3(digit, n - 1);
		};
	};

	by3(3, 9); // 27
}


{	// v3 function declaration (always GLOBAL variable on TOP)
	function by4(x, n) {
		return (n === 1) ? x : (x + by4(x, n - 1));
	};

	by4(4, 9); // 36
}


{	// v4 ES6 Arrow function (always LOCAL variable)
	const by5 = (x, n) => (n === 1) ? x : (x + by5(x, n - 1));
	const bY5 = by5(5, 9);
	
	bY5; // 45
}


{ // Flatting Array
	const simpleArray = ['a', ['b'], [['c']], [[['d']]]];

	const flatArr = (arr) => {
		if (typeof arr === 'object') {
			return arr.reduce((array, currElem) => {
				return [...array, ...flatArr(currElem)];
			}, []);
		} else {
			return arr;
		}
	};

	flatArr(simpleArray); // [ 'a', 'b', 'c', 'd' ];
}


// -------------------------------------------------------------------
const company = {
  sales: [
		{name: 'John', salary: 1000},
		{name: 'Alice', salary: 600 }
	],
  development: {
    sites: [
			{name: 'Peter', salary: 2000},
			{name: 'Alex', salary: 1800 }
		],
    internals: [
			{name: 'Jack', salary: 1300}
		],
    otheSales: {
      seo: [
				{name: 'oleg', salary: 1}
			],
    },
  },
  react: [
		{name: 'eva', salary: 2}
	],
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



// ---------------------------------------------------------------------
// pow function
// ------------
// const pow = (base, power) => {
//   if (power === 1) {    
//     return base;
//   } else {
//     console.log('power', power);
    
//     return pow(base, power - 1) * base
//   };
// };

// console.log(pow(2, 5));

// factorial function
// ------------------
// const factorial = n => {
//   if (n === 0) {
//     return 1;
//   } else {
//     console.log('n', n);
    
//     return n * factorial(n - 1);
//   }
// };

// console.log(factorial(10));

// fibonacci function
// ------------------
// const fibonacci = n => {
//   if (n <= 2) {
//     return 1;
//   } else {
//     console.log('n', n);
    
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// };

// console.log(fibonacci(10));

// reduce function
// ---------------
// const reduce = (fn, acc, [cur, ...rest]) => {
//   if (cur === undefined) {
//     return acc;
//   } else {
//     return reduce(fn, fn(acc, cur), rest);
//   }
// };

// const res = reduce((a, b) => a + b, 0, [1, 2, 3]);

// console.log(res);