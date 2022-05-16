/* ****************************
	https://www.javascripttutorial.net/es6/javascript-computed-property/

	- ES6 allows you to use an expression in brackets []
*/


/* **** Example 1 ******************
*/



let name = 'fullName';

class Person{

	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}
	get [name](){
		return this.firstName+' '+this.lastName;
	}
}

let p1 = new Person('Mahendra', 'Bajpai');
console.log( p1.fullName );







