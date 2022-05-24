/* **************************
	Immediately Invoked Function Expression (IIFE)
	https://www.javascripttutorial.net/javascript-immediately-invoked-function-expression-iife/

	-  IIFE is a function defined as an expression and executed immediately after creation.

	(function(){
	    //...
	})();


	//--- an arrow function to define an IIFE


	(() => {
    	//...
	})();

	- to prevent the functions and variables from polluting the global object is to use IIFE
	
*/


/* *** Example 1 ********
	- - When we define a function, the JavaScript engine adds the function to the global object `window`.
*/


// function add(a, b){
// 	return a+b;
// }

// console.log(window.add);


/* *** Example 2 ***** */


// var counter = 10;
// console.log(window.counter); // 10








/* *** Example 3 **** */



// const add = (function(a, b){
// 	return a+b;
// })

// console.log( add(2,3) );




/* *** Example 4  IIFE **** */



// const add = (function(a, b){
// 	return a+b;
// })(2,3);

// console.log( add );



/* *** example 5  an arrow function to define an IIFE **** */



// const add = ( (a, b)=>{
// 		return a+b;
// } )(2, 3)


// console.log(add);



/* *** Example 6 *** 
	we can avoid polluting them to the global object
	you may see an IIFE that start with a semicolon(;)
the semicolon is used to terminate the statement in case two or more JavaScript files are blindly concatenated into a single file. 
*/




// ;( function(){
// 	var counter = 0;
// 	function add(a, b){
// 		return a+b;
// 	}
// 	console.log( add(20, 30) ); 	// 50 
// }() );




/* **** Example 7 */


const calculator = ( function(){
	function add(a, b){
		return a+b;
	}

	function multiply(a, b){
		return a*b;
	}

	return {
		add: add,
		multiply: multiply
	};

} )();


console.log( calculator.add(2, 3) );
console.log( calculator.multiply(2, 3) );












