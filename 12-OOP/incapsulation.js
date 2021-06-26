'use strict';

{
	// create function constructor
	function User(name, age) {
		// incapsulation variable userAge (we can't change userAge variable)
		let userAge = age;

		this.name = name;
		this.age = age;

		// create Object method
		this.say = function () {
			// console.log(`User name: ${this.name}, age: ${this.age}`);
			console.log(`User name: ${this.name}, age: ${userAge}`);
		};

		// get Object method
		this.getAge = function () {
			return userAge;
		};

		// set Object method
		this.setAge = function (age) {
			if (typeof age === 'number' && age > 0 && age < 110) {
				userAge = age;
			} else {
				console.log('Unknown value!');
			}
		};
	};

	// create new Object from function constructor
	const alex = new User('Alex', 27);

	// get data from Object
	console.log(alex.name);
	console.log('userAge: ', alex.userAge);

	// change data in Object
	// alex.age = 35;
	alex.userAge = 35;

	// invoke Object method from function constructor
	alex.say();

	// invoke get method
	console.log('alex.getAge method: ', alex.getAge());

	// invoke set method
	alex.setAge(45);

	// invoke get method again
	console.log('alex.getAge method: ', alex.getAge());
}


{
	// create class ES6
	class User {
		constructor(name, age) {
			this.name = name;

			// privet value hidden for all
			this._age = age;
		}

		// create class method
		say() {
			// console.log(`User name: ${this.name}, age: ${this.age}`);
			console.log(`User name: ${this.name}, age: ${this._age}`);
		}

		// get class method
		get age() {
			return this._age;
		}

		// set class method
		set age(age) {
			if (typeof age === 'number' && age > 0 && age < 110) {
				this._age = age;
			} else {
				console.log('Unknown value!');
			}
		}
	};

	// create new Object from class
	const alex = new User('Alex', 27);

	// getter data from Object
	console.log('class - Alex: ', alex.age);

	// setter data in Object
	alex.age = 99;

	// invoke class method from class
	alex.say();
}


{
	// create class ES6 with experimental syntax
	class User {
		constructor(name, age) {
			this.name = name;
			// privet value hidden for all
			this._age = age;
		}

		// create privet variable (experimental)
		#surname = 'Dou';

		// create arrow function method (experimental)
		// use lexical context
		say = () => {
			console.log(`User name: ${this.name} ${this.#surname}, age: ${this._age}`);
		}

		// get class method
		get age() {
			return this._age;
		}

		// set class method
		set age(age) {
			if (typeof age === 'number' && age > 0 && age < 110) {
				this._age = age;
			} else {
				console.log('Unknown value!');
			}
		}
	};

	// create new Object from class
	const bob = new User('Bob', 15);

	// getter data from Object
	console.log('class - Bob: ', bob.age);

	// setter data in Object
	bob.age = 18;

	// invoke class method from class
	bob.say();
}