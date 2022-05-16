/*
	https://www.javascripttutorial.net/javascript-this/

	- `this` keyword represents the current instance of the class in java, c++, php etc. 
	- in JavaScript `this` can be use in the global and function contexts.
	- behavior of the  this keyword changes between strict and non-strict modes.

	- `this` refer the object that is currently calling the function.
	
*/




// let counter = {
// 	count: 0,
// 	next: function(){
// 		return ++this.count;
// 	}
// }

// console.log(counter.next());





/*
	Global context

	- `this` refer `window` object on the web browser e.g. this.html
	- `this` refer `global` object on Node.js


*/



// this.color = 'Red';
// console.log(this.color);

// globalThis.color = 'Blue'
// console.log(globalThis.color);



/* *******************************************************
	Function context

*/

//----------------- Example 1 function invocation ----------------------------------------


// function show(){
// 	console.log(this); // `global` object 
// }
// show();



//----------------- Example 2 function invocation in global strict mode --------------------




	// "use strict"

	// function show(){
	// 	console.log(this); // undefined due to "use strict" on top
	// }
	// show();




//--------- Example 3 function invocation inside function strict mode -------------------



// function show(){
// 	"use strict"		// strict mode to a specific function and inner function only
// 	console.log(this); // undefined
// }
// show();



//---------- Example 4  Method invocation -----------------------------------------------



// let car = {
// 	brand: 'Honda',
// 	getBrand: function(){
// 		return this.brand;
// 	}
// }
// console.log( car.getBrand() ); // Honda



//------ Example 5  Method invocation ------------------------------------------



// let car ={
// 	brand: 'Honda',
// 	getBrand: function(){
// 		return this.brand;
// 	}
// }
// 	//let brand = car.getBrand; //method is a property of an object which is a value, you can store it in a variable.
// 	//console.log( brand() ); 	// undefined , because when you call a method without specifying its object


// let brand = car.getBrand.bind(car);    // The bind() method creates a new function whose the this keyword is set to a specified value.
// console.log( brand() );               // Honda




//------- Example 6  Method invocation ---------------------------------------



// let car = {
// 	brand: 'Honda',
// 	getBrand: function(){
// 		return this.brand;
// 	}
// }

// let bike = {
// 	brand: 'Harley Davidson'
// }


// let brand = car.getBrand.bind(bike);  	// bind() method sets the this to the bike object, 
// console.log( brand() );




//---- Example 7 Constructor invocation ----------------------------

// - new keyword to create an instance of a function object, i.e. you use the function as a constructor.

 


// function Car(brand){
// 	this.brand = brand; 	// `this` to the newly created object
// }
// Car.prototype.getBrand = function(){
// 	return this.brand;      // `this`` to the newly created object     
// }

// let car = new Car('Honda');
// console.log( car.getBrand() ); // Honda

// var bmw = Car('BMW');      // call as normal function , without `new`
// console.log(bmw.brand);   // TypeError: Cannot read property 'brand' of undefined





//---- Example 8  make sure that  function is always invoked using constructor `new` ----------------




// function Car(brand){

// 	// -- ES 5 way 
// 	if (!(this instanceof Car)) {
//         throw Error('Must use the new operator to call the function');
//     }

//     //-- ES 6 way

//     // if (!new.target) {
//     //     throw Error('Must use the new operator to call the function');
//     // }


// 	this.brand = brand;
// }

// let car = new Car('Honda');





//--------- Example 9 Indirect Invocation of function  -----------------

// - In JavaScript, functions are first-class citizens i.e. functions are objects, which are instances of the `Function type`
// - The Function type has two methods: call() and apply()
// - These methods allow you to set the `this` value when calling a function.





// function getBrand(prefix){
// 	console.log( prefix + this.brand );
// }

// let honda = {
// 	brand: 'Honda'
// };

// let audi = {
// 	brand: 'Audi'
// };

// // getBrand.call(honda, "it's a ");  // called the getBrand() function indirectly using the call() method 
// // getBrand.call(audi, "it's a ");


// getBrand.apply(honda,["It's a "]); // The apply() method  is similar to the call(),  except second argument is an array





//----- Example 10 -------------------

// - arrow function does not create its own execution context
// - arrow function inherits the `this` from the outer function where the arrow function is defined.



//let getThis = ()=> this;
//console.log( getThis() ); // `window` object in browser, {} in node environment



function Car(){
	this.speed = 120;
}
Car.prototype.getSpeed1 = ()=>{
	return this.speed;
}
Car.prototype.getSpeed2 = function(){
	return this.speed;
}


let carObj = new Car();
console.log( carObj.getSpeed1() );  // undefined, because getSpeed1() is arrow function and it has no own this
console.log( carObj.getSpeed2() );  // 120


/* 
	globalThis 
	
	https://www.javascripttutorial.net/es-next/javascript-globalthis/

	NOTE : 
	- ES2020 introduced the `globalThis` object that provides a standard way to access the global object across environments.
	- In web browsers, the global object is `window` or `frames`.
	-  Web Workers API uses `self` as a global object.
	- Node.js, on the other hand, uses the `global` keyword to reference the global object.
	- To standardize this, ES2020 introduced the `globalThis` that is available across environments.
*/









