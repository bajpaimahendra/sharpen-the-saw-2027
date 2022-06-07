/* ***  Hoisting

	https://www.javascripttutorial.net/javascript-hoisting/


	During the creation phase, the JavaScript engine moves the variable and function declarations to the top of your code, called hoisting;

	
*/


/* *** Variable hoisting ********
	- var variable are hoisted.
*/



// console.log(counter);  	// undefined, but not Error
// var counter = 1;




/* *** Variable hoisting ************
	- let variable are not hoisted.
*/



// console.log(counter); 		// ReferenceError: Cannot access 'counter' before initialization
// let counter = 1;




/* *** Function hoisting 
	JavaScript engine also moves the function declarations to the top of the script.

	During the creation phase of the execution context, JavaScript engine places the function declaration in the heap memory.

*/







// let x = 20,
// 	y = 10;

// let result = add(x, y);

// console.log(result);

// function add(a, b){
// 	return a+b;
// }






/* *** Function expressions 
	Hoisted as variable , so produce Error
	During the creation phase of the global execution context, the JavaScript engine creates the add variable in the memory and initializes its value to undefined.
*/



// let x = 20,
// 	y = 10;

// let result = add(x, y);
// console.log(result);


// var add = function(a, b){
// 		return a+b;
// }



/* *** Arrow functions *********
*/



let x = 20,
	y =10;

let result = add(x, y);   // TypeError: add is not a function, becuase it's hoisted as variable
console.log(result);

var add = (a, b) => a+b;