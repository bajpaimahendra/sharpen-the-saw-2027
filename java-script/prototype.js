/*
	https://www.tutorialsteacher.com/javascript/prototype-in-javascript

	https://www.geeksforgeeks.org/prototype-in-javascript/

	- JavaScript has the built-in Object() function.
	- whenever we create a function, JavaScript engine adds a `prototype` property inside a function.
	- Prototype is basically an object (also known as Prototype object).
	- in a prototype object,  we can attach methods and properties. 
		these methods and properties can inherit(accesibale) by which enables all the other objects.

	- The `prototype` is an object that is associated with every functions and objects by default.
	- function's `prototype` property is accessible and modifiable.
	- object's `prototype` property is not visible.	

	Queston : what to do if we want to add new properties at later stage to a function which will be shared across all the instances ??

	The answer is `Prototype`.

	Use of Prototype

	1) to find properties and methods of an object
	2) to implement inheritance in JavaScript.

*/



// function Student(){

// 	this.name = 'Mahendra';
// 	this.gender = 'Male';
// }

// let studObj1 = new Student();

// studObj1.age = 18; // Attach property to object

// console.log( studObj1.age ); // 18

// let studObj2 = new Student();

// console.log( studObj2.age); // undefined, because age property is not shared with other objects of Student



// console.log(Student.prototype); 	// object, function's prototype property can be accessed using <function-name>.prototype
// console.log(studObj1.prototype);    // undefined, an object (instance) does not expose prototype property
// console.log(Object.getPrototypeOf(studObj1));
// console.log(studObj1.__proto__);    // object, object's(instance) prototype property can be accessed using __proto__






// function Student(){

// 	this.name = 'Mahedra';
// 	this.gender = 'Male';
// }

// Student.prototype.age = 18; // age will accessible by all instaces


// let studObj1 = new Student();

// console.log( studObj1.age); // 18

// let studObj2 = new Student();

// console.log( studObj2.age); // 18








/*
	Changing Prototype 
		If you change function's prototype then only new objects will be linked to changed prototype
*/




// function Student(){

// 	this.name = 'Mahedra';
// 	this.gender = 'Male';
// }

// Student.prototype.age = 18; // 


// let studObj1 = new Student();

// console.log( studObj1.age); // 18

// let studObj2 = new Student();

// console.log( studObj2.age); // 18



// //Student.prototype = { age : 20 };
// Student.prototype.age = 20; // new objects below recent `prototype` will be linked to changed prototype

// var studObj3 = new Student();
// console.log('studObj3.age = ' + studObj3.age); // 20

// console.log('studObj1.age = ' + studObj1.age); // 18
// console.log('studObj2.age = ' + studObj2.age); // 18




/*
https://www.javascripttutorial.net/javascript-constructor-prototype/

Constructor function / Prototype pattern 
	- The constructor function defines the object properties.
	- The prototype defines the methods. that can be shared by all instances in the prototype object.

*/

//- Each object has its own properties firstName and lastName. However, they share the same getFullName() method.







// function Person(firstName, lastName){
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// }

// Person.prototype.getFullName = function(){

// 	return this.firstName+' '+this.lastName;
// }

// let p1 = new Person('Mahedra', 'Bajpai');
// let p2 = new Person('Bajpai', 'Ji');

// console.log( p1.getFullName() );
// console.log( p2.getFullName() );






// console.log( typeof(Object) ); // note that Object() is a function, not an object. 
// console.log(Object.prototype);
// console.log(Object.prototype.constructor);



//--- NOTE : ES6 introduces the class keyword that makes the constructor/prototype pattern easier to use.





class Person {

	constructor (firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName(){
		return this.firstName+' '+this.lastName;
	}
}


let p1 = new Person('Anjali', 'Bajpai');
let p2 = new Person('Richa', 'Bajpai');

console.log(p1.toString());
console.log(Object.prototype);
console.log(p1.__proto__);

console.log(p1.getFullName());
console.log(p2.getFullName());



