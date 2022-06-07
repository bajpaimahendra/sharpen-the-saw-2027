/* ***
	https://www.javascripttutorial.net/es6/javascript-iterator/

	https://www.javascripttutorial.net/es6/javascript-for-of/

*/



/* *** Example 1 For loop 
	- to iterate an array
*/



// let ranks = ['A', 'B', 'C'];

// for(let i=0; i<ranks.length; i++){
// 	console.log(ranks[i]);
// }




/* *** Example 2 For of loop
	- ES6 introduced a new loop construct called for...of to eliminate the standard loop’s complexity and avoid the errors caused by keeping track of loop indexes

*/




// let ranks = ['A', 'B', 'C'];

// for(let rank of ranks){
// 	console.log(rank);
// }




/* *** Difference for..in and for..of 
	- for..in iterates over index(properties) of an object
	- for..of iterates over the values of an object
*/


// let ranks = ['A', 'B', 'C'];
// ranks.added = 'D';
// ranks['new'] = 'E';



// // for(let elKey in ranks){
// // 	console.log(elKey, ranks[elKey]);
// // 	//console.log(ranks[elKey]);
// // }


// for(let elValue of ranks){
// 	console.log(elValue);
// }




/* *** Example 3 : array destructuring with for…of
*/




// let colors = ['Red', 'Green', 'Blue'];

// //console.log( colors.entries() );
	
// 	// -- we used the `array destructuring` to assign the result of the entries() method

// for(const [key, value] of colors.entries()){         
// 	console.log(`${value} is at index ${key}`);
// }





/* *** Example 4 : object destructuring with for…of */




const rating = [
	
		{user: 'A', score: 2},
		{user: 'B', score: 3},
		{user: 'C', score: 4},
		{user: 'D', score: 5}

		];

let sum = 0;
for(const {score} of rating){
	sum +=score;
}

console.log('Total scores = ',sum);


/* *** Iterating over strings */


let str = 'Mahendra';

for(let char of str){
	console.log(char);
}

/* *** Example 3 ************************** */


var myObject = { a: 1, b: 2, c: 3, d: 4 };



// for(let key in myObject){
// 	console.log(key, myObject[key]);
// }


// for(let value of myObject){
// 	console.log(value);
// }
