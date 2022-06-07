/* ***
	
	https://www.javascripttutorial.net/es6/symbol/
	https://flaviocopes.com/javascript-symbols/

	- ES6 added `Symbol` as a new primitive type.
	- symbol type doesn’t have a literal form, it created by global Symbol() function.
	- Symbol() call is guaranteed to return a unique Symbol. that's guaranteed to be unique.
	- Symbols are not enumerable in for...in iterations.
	Why Symbol Type ?
		Symbols are often used to add unique property keys to an object that won't collide with keys any other
*/



/* ***  To create a new symbol, you use the global Symbol() function */ 



// let s = Symbol();

// console.log(s);




/* *** Symbol() function creates a new unique value each time */



// let s1 = Symbol();
// let s2 = Symbol();

// console.log( s1===s2);  // false


// let status1 = Symbol('open');
// let status2 = Symbol('open');

// console.log( status1==status2 );  // false




/* ***  The Symbol() function accepts a description as an optional argument. */



// let firstName = Symbol('first name'),
// 	lastName  = Symbol('last name');

// console.log(firstName);
// console.log(lastName);

// console.log(typeof firstName); // Since symbols are primitive values, you can use the  typeof operator.



/* *** Since a symbol is a primitive value, new operator */



//let s = new Symbol(); 	// TypeError: Symbol is not a constructor



/* *** Sharing symbols

	- the global symbol registry that allows you to share symbols globally.
	- shareable can create br `Symbol.for() method` instead of Symbol() function.
	- Symbol.for() method accepts description key.  let ssn = Symbol.for('ssn');
	- Symbol.for() method searches key in the global symbol registry.
	- if you call the `Symbol.for()` method using the same key, it will return the existing symbol.
*/



// let ssn1 = Symbol.for('ssn'); 	// Symbol.for() to look up the symbol with the  ssn key., if not already ssn key new symbol will created
// let ssn2 = Symbol.for('ssn');

// console.log(ssn1 === ssn2); 	// true

// console.log( Symbol.keyFor(ssn1) );  	// Symbol.keyFor() method used to get key associated with a symbol.




/* *** If a symbol that does not exist in the global symbol registry, System.keyFor() returns undefined  */




// let ssn3 = Symbol('ssn');

// console.log( Symbol.keyFor(ssn3) );  	// undefined






/* *** 
	Symbol usages 1: Symbols can be used as object value

*/


// let statuses = {
//     OPEN: Symbol('Open'),
//     IN_PROGRESS: Symbol('In progress'),
//     COMPLETED: Symbol('Completed'),
//     HOLD: Symbol('On hold'),
//     CANCELED: Symbol('Canceled')
// };





/* *** 
	Symbol usages 2: Symbols can be used as object property

	- to avoid name clashing between properties, since no symbol is equal to another
	will never conflict with string keys

	--- computed property means property as variable which will used by [..] square bracket
*/




let open_status = Symbol('open');
let hold_status = Symbol('On hold');
let completed_status = Symbol('Completed');

let taskStatus = {
	[open_status]: 'opened', 
	'open' : 'started',       // 'open' string property is clashing with Symbol('open')
	[hold_status]: 'holded',
	[completed_status]: 'completed'
};


//console.log(taskStatus);

console.log(taskStatus[open_status]);

	/*
		- To get all the enumerable properties of an object, 
				Object.keys()  					in ES 5 
				Object.getOwnPropertyNames()	in ES 6 
		- Symbol are not enumerable.
		- Symbols are not enumerated, which means that they do not get included in a for..of or for..in loop ran upon an object
	*/

console.log(Object.keys(taskStatus)); // ["open"] 

console.log(Object.getOwnPropertyNames(taskStatus));  // ["open"]





