/*

	-  a constructor function is a regular function with the following convention:
			The name of a constructor function starts with a capital letter like Person, Document, etc.
			A constructor function should be called only with the `new` operator.
	- a constructor function implicitly(by default) returns `this` that set to the newly created object

	- constructor function allows you to create multiple similar objects like normal object {...}. 		

	- https://www.javascripttutorial.net/javascript-constructor-function/		

*/


function Person(firstName, lastName){

	// this = {};

	this.firstName = firstName;
	this.lastName = lastName;

	// return this;
}

// let person1 = Person('Mahendra', 'Bajpai'); // calling as Normal function
// console.log('person1', person1); // undefined, because calling as Normal function


// let person2 = new Person('Bajpai', 'Ji');
// console.log('person2 ', person2);


/* ************** Adding methods to JavaScript constructor functions */


// function Person(firstName, lastName){
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.getFullName = function(){
// 		return this.firstName+' '+this.lastName;
// 	}
// }

// let person3 = new Person('Mahendra', 'Bajpai');
// console.log(person3);
// console.log( person3.getFullName() );




/* ****************** 
	prevent a constructor function to be invoked without the `new`
	ES6 introduced the `new.target`` property.

 *****/


 function Person(firstName, lastName) {

    //console.log('jjjjjj ', new.target);

    //  if (!new.target) {
    //     throw Error("Cannot be called without the new keyword");
    // }

    if (!new.target) {
        return new Person(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName  = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

let person4 = Person("John", "Doe");
console.log(person4);









