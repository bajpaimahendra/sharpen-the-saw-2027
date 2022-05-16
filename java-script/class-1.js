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




/* ************************ Class vs. Custom type 
	1- class declarations are not hoisted like function declarations.
		- let p1 = new Person('Anjali', 'Bajpai'); befor class declarations will produce ReferenceError

	2- 	all the code inside a class automatically executes in the strict mode. And you cannot change this behavior.

	3- class methods are `non-enumerable` i.e not available in for..in loop

	4- calling the class constructor without the `new` operator will result in an error 


*/
