/*
	https://www.javascripttutorial.net/javascript-try-catch/

	When the JavaScript engine encounters an error, immediately terminates the execution of the entire script.
	Sometimes, you want to handle the error and continue the execution. To do that, you use the try...catch


	try {
	  // place the code that may cause an error in the try block.
	} catch(error){
	  //  implement the logic to handle the error in the catch block.
	}

	error object has at least two properties : name ( specifies the error name ) and message (explains the error in detail).

	If no error occurs in the try block, the JavaScript engine ignores the catch block.

*/


/* ***  Without try...catch  */




// let result =  add(10, 20);   // ReferenceError: add is not defined

// console.log(result);

// console.log('Bye........');





/* ***  using try...catch  */



// try{
// 	let result = add(10,20);
// 	console.log(result);
// }catch(err){
// 	// console.log( 'Error Name : ', err.name );
// 	// console.log('Error message : ', err.message);
// 	// console.log( 'Error Stack : ', err.stack);
// 	console.log( {name:err.name, message: err.message} );
// }
// console.log('Bye........');  	// JavaScript engine continues to execute the last statement




/* *** try...catch...finally  

	Sometimes, you want to execute a block whether exceptions occur or not, use `finally`.
	- The finally block always executes whether exceptions occur or not
*/


let result = 0;

try{
	result = add(10, 20);
}catch(e){
	console.log('Error message :- ', e.message );
}finally{
	console.log( 'result = ', result );
}