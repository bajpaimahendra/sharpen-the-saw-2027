/* ***
	https://www.javascripttutorial.net/es6/difference-between-var-and-let/

*/


/* *** 		`let` Doesn't Allow Hoisting 
	
*/



// console.log(a);  	// undefined, (not an error)
// var a = 10;


// console.log(x);  	// ReferenceError: Cannot access 'x' before initialization
// let x = 20;





/* *** Redeclaration 
	`var` will can re-declare the same variable.
	`let` let raises a SyntaxError.
*/


// 'use strict';
// var foo = "foo1";
// var foo = "foo2"; // No problem, 'foo1' is replaced with 'foo2'.

// console.log(foo);

// let bar = "bar1"; 
// let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared





/* *** 		`var` is used in a loop, the value of that variable changes.
			`let` is used in a loop, the value of a variable does not change.
*/




// var a =	2;
// for(var a=0; a<3; a++){
// 	console.log('"var a" inside loop = ', a);
// }
// console.log('"var a" outside the loop = ', a );



// let x = 2;
// for (let x = 0; x < 3; x++) {
// 	console.log('"let x" inside loop = ', x);
// }
// console.log('"let x" outside the loop = ', x);




/* **************************************************** 

*/




//'use strict';
var a = 7;
let b =9;

function access(){
	//'use strict';
	console.log('inside function var a = ', a);
	console.log('inside function let b = ', b);

}

access(); 




