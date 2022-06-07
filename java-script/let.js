/* ***
	https://www.javascripttutorial.net/es6/javascript-let/

	- `let` : Block-Scoped Variables
	- blocks are denoted by curly braces {},  for example, the if else, for, do while, while, try catch and so on

	- ES6 provides `let` keyword similar to the `var` keyword, , except that these variables are blocked-scope.


	- `var` keyword, the scope of the variable is either global or local. 
			e.g variable outside of a function is global and variable inside a function is local.
*/




// let x = 10;
// if(x==10){
// 	// x = 20;   // without let or var
// 	//let x = 20;
// 	console.log('variable x inside if block ',x);
// }
// console.log('variable x outside if block ',x);




/* *** let and global object 

	- var keyword,  add that variable to the property list of the `global object` (global object is the `window` for browser)

*/



// var a = 10;
// //console.log(window.a); // 10 in browser


// let b = 20;
// console.log(window.b); // undefined, browser 




/* *** let and callback function in a for loop */




// for (var i = 0; i < 5; i++) { 		 //  i is a global variable. After the loop, its value is 5.

// //for (let i = 0; i < 5; i++) { 	//  let keyword declares a new variable in each loop iteration.
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }





/* *** Redeclaration 
	- var keyword allows you to redeclare a variable without any issue However let keyword will result in an error.
*/



	//--ar keyword allows you to redeclare a variable without any issue


// var counter = 10;
// var counter;
// console.log(counter); 	// 10


	// -- let keyword will result in an error


// let counter = 10;
// let counter; 			// SyntaxError: Identifier 'counter' has already been declared
// console.log(counter);




/* *** let variables and hoisting */



{
	console.log(counter); 		// Cannot access 'counter' before initialization
	let counter = 10;
}







