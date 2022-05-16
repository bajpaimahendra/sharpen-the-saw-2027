/*
	https://www.javascripttutorial.net/javascript-own-properties/

	- an object is a collection of properties, where each property a key-value pair.
	- JavaScript uses prototypal inheritance.
	- a property of an object can be either own or inherited.
	- The obj.hasOwnProperty() method determines whether or not a property is own.
*/




const person = {
	firstName: 'Mahendra',
	lastName: 'Bajpai'
};

const employee = Object.create(
	person,
	{
		job: {
			value: 'web Developer',
			enumerable: true

		}

	}

);

console.log(  employee.hasOwnProperty('job') );   // true
console.log( employee.hasOwnProperty('firstName') ); // false











