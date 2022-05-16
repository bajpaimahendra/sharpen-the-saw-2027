/*
	https://www.javascripttutorial.net/javascript-enumerable-properties/
	
	- an object is an unordered list of key-value pairs
	- The key is usually a string or a symbol. called property
	- The value can be primitive type (string, boolean, number, undefined, or null), an object, or a function.
	- property has several internal attributes including value, writable, enumerable and configurable.
	- By default, all properties are enumerable i.e. accessible using for...in loop or Object.keys();

*/


//--- Example 1 ------------------------------------------------------



// const person = {
// 	firstName: 'Mahendra',
// 	lastName: 'Bajpai'
// };

// person.age = 29;

// // for(const key in person){
// // 	console.log(key);         // firstName, lastName, age
// // 	//console.log(person[key]);  // object[perperty]
// // 	//console.log(person.key); 
// // }


// 	// Object.defineProperty(
// 	// 	person,
// 	// 	'dob',
// 	// 	{
// 	// 		enumerable: false,
// 	// 		value: '10-301980'
// 	// 	}
// 	// );

// 	// for(const key in person){
// 	// 	console.log(key);     // firstName, lastName, age  and dob is not enumerable
// 	// }


// 	//--- ES6 provides a method propertyIsEnumerable() that determines whether a property is enumerable or not

// console.log(person.propertyIsEnumerable('firstName')); // => true
// console.log(person.propertyIsEnumerable('dob'));		// => false









