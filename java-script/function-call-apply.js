/* **************************
	https://www.javascripttutorial.net/javascript-function-type/

	Only if you use `call` or `apply` you can modify the this context inside the function.

	- in JavaScript `this` does not refer to the current object, 
		rather to the execution context and can be set by the caller.

	- If you call a function using the `new` keyword `this` will correctly refer to the new object (inside the constructor function)..

		But in all other cases - `this`` will refer to the global object (window/global) unless set explicitly through call


function.bind(thisArg, optionalArguments)
function.call(thisArg, arg1, agr2, ...)
function.apply(thisArg, [argumentsArr])

Difference 
	- `call` invoke the function with arguments as an individual.
	- `apply` invoke the function with arguments as an array.

	- A useful mnemonic is "A for array and C for comma."call

*/


/* *** Example 1 ********
*/

let cat = {type: 'Cat', sound: 'Meow'};
let dog = {type: 'Dog', type: 'Woof'};


// const say = (message)=>{
// 	console.log(message);
// 	console.log( this.type+' says '+this.sound );   // undefined says undefined, because arrow function do not have `this` here
// }


const say = function(message){
	console.log(message);
	console.log( this.type+' says '+this.sound );   // Cat says Meow
}


say.call(cat,'what does a cat say ?');         // `this`  object references  the `cat` object.
say.apply(cat , ['what does a cat say ?']);

	






/* **** Exmple 2 */

const add = (x, y)=>{
	return x+y;
}

let result1 = add(2, 3);
console.log('add function invoke normaly', result1 ); 

let result2 = add.call(this, 2, 3); // `this` inside the function is set to `window` in the web browsers and `global` in Node.js.
console.log( 'add function invoke by call ', result2 );


let result3 = add.apply(this, [2,3]);
console.log('add function invoke by apply ', result3 );




/* *** Example 3  bind() method ****************
	- creates a new function instance whose this value is bound to the object that you provide.
*/



let car = {
	speed: 5,
	start : function(){
		console.log(  'Start with '+this.speed+' km/h' );
	}
}

let aricraft = {
	speed: 10,
	fly: function(){
		console.log('Flying');
	}
}

/*
	The aircraft has no start() method. we can bind() , start() method of car
*/


let taxiing = car.start.bind(aricraft); // we change the this value inside the start() method of the car object 

taxiing(); // Now, we can call the start() method via the taxiing variable:



/*

	- bind() method creates a new function that you can execute later
	- call() method executes the function immediately.
	- the aircraft object borrows the start() method of the car object via the bind()
	- bind(), call(), and apply() methods are also known as borrowing functions.


*/










