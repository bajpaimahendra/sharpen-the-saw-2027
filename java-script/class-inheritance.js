/* ****************************
	https://www.javascripttutorial.net/es6/javascript-inheritance/

	
*/


/* **** Example 1 ******************
	- Prior to ES6, inheritance achived by prototypal inheritance
*/



// function Animal(legs){
// 	this.legs = legs;
// }

// Animal.prototype.walk = function(){
// 	console.log('Walking on '+this.legs+' legs');
// }


// function Brid(legs){
// 	Animal.call(this, legs);
// }

// Brid.prototype = Object.create(Animal.prototype);
// Brid.prototype.constructor = Animal;

// Brid.prototype.fly = function(){
// 	console.log('flying');
// }

// let pigeon = new Brid(2);
// pigeon.walk();
// pigeon.fly();





/* ***** Example 2 
	- To call the method of the parent class in the child class. super.method(arguments)
*/





// class Animal {

// 	constructor(legs){
// 		this.legs = legs;
// 	}
// 	walk(){
// 		console.log( 'Walking on '+this.legs+' legs'  );
// 	}
// }

// class Brid extends Animal {

// 	constructor(legs){
// 		super(legs);   	// super() to invoke parent's class constructor , equivalent to Animal.call(this, legs);
// 	}
// 	fly(){
// 		console.log('flying');
// 	}
// }


// let bird = new Brid(2);
// bird.walk();
// bird.fly();




/* ******** Example 3  Inheriting static members

	- child class also inherits all static properties and methods of the parent class. 
*/





// class Animal {

// 	constructor(legs){
// 		this.legs = legs;
// 	}
// 	walk(){
// 		console.log( 'Walking on '+this.legs+' legs' );
// 	}
// 	static helloWorld(){
// 		console.log( 'Hello World ...' );
// 	}
// }


// class Brid extends Animal{
// 	fly(){
// 		console.log('flying....');
// 	}
// }

// Brid.helloWorld();






/* **** Example 4  Inheriting from built-in types *********

	- JavaScript allows you to extend a built-in type such as Array, String, Map, and Set through inheritance.

*/




// class Queue extends Array {

// 	enqueue(e){
// 		super.push(e);
// 	}
// 	dequeue(){
// 		return super.shift();
// 	}
// 	peek(){
// 		return !this.empty()? this[0]: undefined
// 	}
// 	empty(){
// 		return this.length ===0;
// 	}
// }

// let cust = new Queue();
// cust.enqueue('Mahendra');
// cust.enqueue('Anjali');
// cust.enqueue('Richa');

// console.log( cust);

// console.log( cust.dequeue() );

// while(!cust.empty()){
// 	console.log( cust.dequeue() );
// }












