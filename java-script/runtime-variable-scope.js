/* ***  Variable Scopes

	https://www.javascripttutorial.net/javascript-variable-scope/
	
	JavaScript has three scopes:
		global scope
		Local scope
		Block scope (started from ES6)

	Global Scope :

		- When the JavaScript engine executes a script, it creates a global execution context.
		-  variables  outside of functions goes to global execution context and known as global variables. 
			It can be accessible everywhere in the script.

	Local Scope : 

		- When the JavaScript engine executes the function, it creates a function execution context.
		- variables inside a function goes to function execution context and known as local variables.
	
*/



//let var1 = 'Hi';
// var var1 = 'Hi';


// function say(){
// 	var var2 = 'Hello';
// 	console.log(var2);

// 	var1 = 'Welcome';  // global variable can access here, so it can overwrite here.  
// 	console.log(var1);
	
// }

// say();

// console.log(var1);

//console.log(var2); // var2 is local for function, not available outside the function 



/* ********************* scope chain

	- Look up the variable  in the current context (function execution context) of  function. 
	- Ifcannot find search in outer execution context which is the global execution context..
*/




// var msg = 'Hi';

// function say(){
// 	console.log(msg);
// }


// say();



/* ********************  More scope chain  	*/



// var y = 20;

// function bar(){
// 	var y = 200; // again define in function context

// 	function baz(){
// 		console.log(y); // 200
// 	}
	
// 	baz();
// }

// bar();
// console.log(y);  // 20





/* *******  Global variable leaks: the weird part of JavaScript

 	- variable without the var, let, or const keyword, known as the leaks of the global variables.

 	- If there is no var, let, or const keyword, the counter variable is not available in the local scope. 
 	- Then looks up the counter variable in the global scope.
 	- If global scope also doesn’t have the counter variable, so the JavaScript engine creates the variable in the global scope.


 	To fix this “weird” behavior, you use the 'use strict' at the 
 		top of the script or at the top of the function:
	
*/




// 	// 'use strict'

// function getCounter(){

// 	//'use strict'

// 	counter = 10;
// 	return counter;
// }

// console.log( getCounter() );




/* *********************   Block scope `let` and `const`

	- ES6 provides the let and const keywords that allow you to declare variables in block scope.

	-Generally, whenever you see curly brackets {}, it is a block. 
		It can be the area within the if, else, switch conditions or for, do while, and while loops.
*/




// function say(message){
// 	if(!message){
// 		let greeting = 'Hello ...'; 	// block scope
// 		console.log(greeting);
// 	}
// 	//console.log(greeting);  	      // ReferenceError
// }

// say();









