/* **************************
	https://www.javascripttutorial.net/javascript-function-type/

	- All functions are objects. They are the instances of the `Function` type
	- Each function has two important properties
		`length`  property determines the number of named arguments
		`prototype`` property references the actual function object.
*/


/* ******************************* */


let add = (x, y)=>{
	return x+y;
}


console.log( add.length ); 		// 2
console.log( add.prototype );	// undefined

console.log( add instanceof Function); 	// true, because a function is an instance of the `Function`
/* ******************************* */


// function add2(x, y){
// 	return x+y;
// }

// console.log( add2.length ); 		// 2
// console.log( add2.prototype );	// add {}



/* ********** new.target  in arrow function ************ */



// let add = (x, y)=>{
// 	console.log(new.target);   // undefined
// 	return x+y;
// }

// let result = add(1, 2);
// //let obj = new add(1, 2); 		// TypeError: add is not a constructor


/* ********** new.target  in normal function ************ */



// let add = function(x,y){
// 	console.log(new.target);
// 	return x+y;
// }

// let result = add(1, 2);
// let obj = new add(1, 2); 	// [Function: add]



/*
	new.target  to prevent the function from being called with the new keyword as a constructor
*/





// let add = function(x, y){
// 	if(!new.target){
// 		throw 'The add function can not be called as a constructor';
// 	}
// 	return x+y;
// }


// let result = new add(1, 2);
// console.log(result);









