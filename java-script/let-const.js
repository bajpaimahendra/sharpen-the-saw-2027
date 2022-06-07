/* ***
	https://www.javascripttutorial.net/es6/javascript-const/

	`const` keyword creates a read-only reference to a value.

*/


// {
// 	var a = 1;
// 		b = 2
// 	let c = 3;
// 	const d = 4;
// }

// console.log(a);
// console.log(b);
// console.log(c);  // ReferenceError : c is not defined
// console.log(d);	 // ReferenceError : d is not defined



/* *******************************
	- `let` keyword are mutable
	- `const` 	are immutable
*/


// let a = 10;
// a = 20;
// a = a+5;
// console.log(a); 	// 25



// const rate = 29;
// rate = 88;  		// // TypeError, because immutable






/* *** const and Objects
*/





// const person = {age: 20};
// person.age = 30;  			// you can change the value of its property
// console.log(person);

// person = {age: 30};        // // TypeError, you cannot reassign a different value person is constant.   




/* *** const and Arrays
*/




// const colors = ['red'];
// colors.push('green');    	// you can change the value array

// console.log(colors);


// colors = ['yellow'];  		// TypeError, can not reassing, because it's constant





/* *** const in a for loop

a new variable is created in each iteration.
- If you don’t intend to modify use `const`.


*/



let scores = [75, 80, 95];


for(let score of scores){
	console.log(score);
}



for(const score of scores){
	console.log(score);
}


for (const i = 0; i < scores.length; i++) { // TypeError, because i is constant and can not change in every iteration.
    console.log(scores[i]);
}














