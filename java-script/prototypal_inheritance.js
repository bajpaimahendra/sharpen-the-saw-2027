/*
	- a class is a blueprint for creating objects.
	- if we create new class to reuse the functionality of an existing class, called classical inheritance.
	- JavaScript doesn’t use classical inheritance. Instead, it uses prototypal inheritance.
	- In prototypal inheritance, an object “inherits” properties from another object via the prototype linkage.

	- Inheritance allows an object to use the properties and methods of another object

	JavaScript uses the prototypal inheritance.
*/


let person = {

	name: "Mahendra Bajpai",
	greet: function(){
		return "Hi I am "+this.name
	}
}

let teacher = Object.create(person); // creates an empty teacher object

teacher.name = "Richa";
teacher.teach = function(subject){
	return "I can teach "+ subject;
}

console.log( teacher.greet() ); // greet() is  method of person object inherited by teacher object

console.log( teacher.teach('Maths and Music') );








