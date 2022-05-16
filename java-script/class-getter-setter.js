/* ****************************
	https://www.javascripttutorial.net/es6/javascript-class/
*/



/* ******** Example 1 Classes prior to ES6 ---- 

	- function starts with a capital letter like Person, Document, etc.
	- A constructor function should be called only with the `new` operator.
*/



// function Person(firstName, lastName){
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// }
// Person.prototype.getFullName = function(){
// 	return this.firstName+' '+this.lastName;
// }

// let p1 = new  Person('Mahendra', 'Bajpai');

// console.log( p1.getFullName() );





/* *****  Example 2 classes onwards to ES6

	- ES6 introduced a new syntax for declaring a class
	- class is a blueprint for creating objects.
	- A class encapsulates data and functions.
	- ES6 classes are just special functions.
	- `class` keyword declares a new class.
	- `class` declaration is syntactic sugar over `prototypal inheritance` with additional enhancements

*/





// class Person{

// 	constructor(firstName, lastName){
// 		this.firstName = firstName;
// 		this.lastName =  lastName;
// 	}
// 	getFullName(){
// 		return this.firstName+' '+this.lastName;
// 	}
// }

// let p1 = new Person('Anjali', 'Bajpai');
// console.log( p1.getFullName() );

// console.log( typeof Person );  	// function, because ES6 classes are just special functions




/* ********* 

	https://www.javascripttutorial.net/es6/javascript-getters-and-setters/

*/



// class Person{

// 	constructor(firstName, lastName){
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}
// 	get firstName(){
// 		return this._firstName; // property is changed to _firstName to avoid the name collision with the getter and setter.
// 	}
// 	get lastName(){
// 		return this._lastName;
// 	}

// 	set firstName(fName){

// 		this._firstName = fName;
// 	}
// 	set lastName(lName){
// 		this._lastName = lName;
// 	}

// 	getFullName(){
// 		return this.firstName+' '+this.lastName;
// 	}
// }

// let p1 = new Person('Mahendra', 'Bajpai');

// console.log( p1.getFullName() );  	// Mahendra Bajpai

// p1.firstName = 'Richa';  			// getter setter will be invoked
// p1.lastName = 'Bajpai';

// console.log( p1.getFullName() );  	// Richa Bajpai





/* ****************************
	getter in an object literal
*/



let user = {
	firstName: 'Mahendra',
	lastName: 'Bajpai',
	get fullName(){
		return this.firstName+' '+this.lastName;
	}
};

console.log( user );
console.log( user.fullName );   // Mahendra Bajpai