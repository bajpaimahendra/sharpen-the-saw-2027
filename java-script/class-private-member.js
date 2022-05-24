/* ****************************
	https://www.javascripttutorial.net/javascript-private-fields/
	https://www.javascripttutorial.net/javascript-private-methods/

	- Private fields are accessible only inside the class, not from outside of the class or subclasses.

	- ES2022 allows you to define private fields for a class.
	- prefix the field name with the # sign To define a private field
	- Use the in operator to check if an object has a private field.


	https://www.javascripttutorial.net/javascript-private-methods/

	- By default, members of a class are public
	- ES2020 introduced the private members ( field and method )
	- prefix its name with a hash # to make private
	class MyClass {
	  #privateMethod() {
	    //...
	  }
	}

*/



/* ******** Example 1 

*/





// class Circle{

// 	#radius;
	
// 	constructor(radius){
// 		this.#radius = radius;
// 		this.diameter = this.#radius*2;
// 	}
// 	get area(){ 			// getter method

// 		return Math.PI*Math.pow(this.#radius,2);
// 	}
// }

// let circleObj = new Circle(10);

// console.log( circleObj.area );        // 314.1592653589793
// console.log( circleObj.diameter ); 	 // 20 
// console.log( circleObj.radius ); 	// undefined




/* *** Example 2  Using getter and setter
*/



// class Circle{

// 	#radius = 0;
// 	constructor(radius){
// 		this.#radius = radius;
// 	}
// 	get radius(){
// 		return this.#radius;
// 	}
// 	set radius(value){
// 		if(typeof value==='number' && value>0){
// 			this.#radius = value;
// 		}else{
// 			throw 'The radius must be positive number';
// 		}
// 	}
// 	get area(){
// 		return Math.PI*Math.pow(this.#radius,2);
// 	}
// }

// let circleObj = new Circle(10);
// console.log('radius = ', circleObj.radius);  // getter method
// console.log('Area = ', circleObj.area);





/* *** Example 3   Static private fields
*/



// class Circle{

// 	#radius = 0;
// 	static #count = 0;
// 	constructor(radius){
// 		this.#radius = radius;
// 		Circle.#count++;
// 	}
// 	get radius(){
// 		return this.#radius;
// 	}
// 	get area(){
// 		return Math.PI*Math.pow(this.#radius, 2);
// 	}
// 	static getCount(){
// 		return Circle.#count
// 	}
// }

// let circles = [ new Circle(10), new Circle(20), new Circle(30)];

// console.log( Circle.getCount() );



/* *** Example 1  Private instance method
*/





// class Person{

// 	#firstName;
// 	#lastName;
// 	constructor(firstName, lastName){
// 		this.#firstName = firstName;
// 		this.#lastName = lastName;
// 	}

// 	getFullName(format = true){
// 		return format ? this.#firstLast() : this.#lastFirst();
// 	}

// 	#firstLast() {
// 		return this.#firstName+' '+this.#lastName;
// 	}

// 	#lastFirst(){
// 		return this.#lastName+' '+this.#firstName;
// 	}
// }

// let personObj = new Person('Mahendra', 'Bajpai');

// console.log( personObj.getFullName() );




/* *** Example 2 Private static method **/





// class Person {
// 	#firstName;
// 	#lastName;
// 	constructor(firstName, lastName){
// 		this.#firstName = Person.#validate(firstName);
// 		this.#lastName = Person.#validate(lastName);
// 	}
// 	static #validate(name){
// 		if(typeof name==='string'){
// 			let str = name.trim();
// 			if(str.length>=3){
// 				return str;
// 			}
// 		}
// 		throw 'The name must be a string with at least 3 characters';
// 	}
// 	getFullName(){
// 		return this.#firstName+' '+this.#lastName;
// 	}
// }

// let personObj = new Person('Mahendra', 'Bajpai');

// console.log( personObj.getFullName() );


