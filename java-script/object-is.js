/*
	https://www.javascripttutorial.net/es6/javascript-object-is/
	
	- Object.is() to check if two values are the same.
	- The Object.is() behaves like the ===

*/




// let amt1 = +0,
// 	amt2 = -0;

// 	// -- The === operator treats -0 and +0 are the same value:

// console.log(amt1==amt2); 	// true
// console.log(amt1===amt2);	// true

// 	// -- Object.is() treats +0 and -0 as different values.


// console.log( Object.is(amt1, amt2) ); 	// false



//----- NaN ------------------------------

	// -- The NaN is the only number that does not equal itself.




let qty = NaN;

console.log( qty===qty); 				// false
console.log( Object.is(qty, qty) ); 	// true









	


