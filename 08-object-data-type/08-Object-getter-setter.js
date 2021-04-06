'use strict';

{
	const person = {
		name: 'Alex',
		age: 35,
		
		// get name data from Object
		get userAge() {
			return this.age;
		},
		
		// set new value in name key name in Object
		set userAge(num) {
			this.age = num;
		},
	};

	// invoke getter
	console.log(person.userAge);
	
	// invoke setter change person.age
	console.log(person.userAge = 36);
}