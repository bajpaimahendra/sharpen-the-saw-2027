/* **************************
	https://www.javascripttutorial.net/javascript-closure/
	http://skilldrick.co.uk/2010/11/a-brief-introduction-to-closures/
	https://www.youtube.com/watch?v=w1s9PgtEoJs

	- Lexical scope means the inner functions have access to the variables and other resources of their parent scope.
	- closure is created when a child function keep the environment of the parent scope even after the parent function has already executed
	
	- Closures help in maintaining the state between function calls without using a global variable.
	-A closure is a combination of a function and its ability to remember variables in the outer scope.


-A function closed by another function, called closer function or inner function

*/


/* *** Example 1 ********
*/


	// Function to increment counter

// function add() {
//   let counter = 0;
//   counter += 1;
//   return counter;
// }

// // Call add() 3 times
// add();
// add();
// console.log( add() );

	//The counter should now be 3. But it is 1.


/* *** Example 2 ********
*/





// function add() {
//   let counter = 0;
// 	function increment(){
// 	  counter += 1;
// 	  return counter;
// 	}
// 	return increment;
// }

// // Call add() 3 times
// let inc =  add();
// inc();
// inc();
// console.log( inc() );



/* *** Example 3  immediately invoked function expression  ***
*/


const add = (function () {
  let counter = 0;
	function increment(){
	  counter += 1;
	  return counter;
	}
	return increment;
})();



console.log( add() );
console.log( add() );
console.log( add() );
console.log( add() );




