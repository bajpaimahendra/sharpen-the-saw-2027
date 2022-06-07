/*
	https://www.javascripttutorial.net/es6/javascript-set/
	https://javascript.info/map-set

	- ES6 provides a new type `Set` that stores a collection of unique values of any type.
	- Set is a special type collection – “set of values” (without keys), where each value may occur only once.

	let setObject = new Set();

		OR

	let setObject = new Set(iterableObject);


	add(value) – 	appends a new element with a specified value to the set. It returns the Set object, therefore, you can chain this method with another Set method.
	clear()  – 		removes all elements from the Set object.
	delete(value) – deletes an element specified by the value.
	entries()– 		returns a new Iterator that contains an array of  [value, value] .
	forEach(callback [, thisArg]) – invokes a callback on each element of the Set with the this value sets to thisArg in each call.
	has(value) – 	returns true if an element with a given value is in the set, or false if it is not.
	keys() – 		is the same as values() function.
	[@@iterator] –  returns a new Iterator object that contains values of all elements stored in the insertion order.

*/



// let setObj = new Set();  	// create a empty `Set`, 
// console.log('empty set ', setObj);



/* *** Create a new Set from an Array */



// let chars =  new Set(['a', 'a', 'b', 'c', 'c']);

// console.log('chars ', chars);  // Set{ 'a', 'b', 'c' }, because, All elements in the set must be unique.
// console.log( typeof(chars) );  // object

// console.log('chars size =', chars.size);  	// To get the number of elements that the set holds





/* *** Add elements to a Set */


// let chars = new Set(['a', 'a', 'b', 'c']);

// chars.add('d');

// console.log(chars);

// 	// -- add() method is chainable

// chars.add('e')
// 	 .add('f')
// 	 .add('g');

// console.log(chars);
// console.log('Check value in Set', chars.has('a') );	 // true



/* *** Remove elements from a set */




// let chars = new Set(['a', 'a', 'b', 'c']);

// console.log(chars);

// chars.delete('c');

// console.log('after delete', chars);



/* *** Example 1 : Looping the elements of a Set */


// let roles =  new Set();
// roles.add('admin')
// 	 .add('editor')
// 	 .add('subscriber');


// for(let role of roles){
// 	console.log(role);	
// }


// for(let [key, value] of roles.entries()){
// 	console.log(key, value);
// }


// roles.forEach((role)=>{
// 	console.log(role);
// });



/* *** Example 2 : Looping the elements of a Set */



let users = new Set();

let mahendra = {name: 'Mahendra', age: 37};
let richa    = {name: 'Richa', age: 12};

users.add(mahendra)
	 .add(richa);


for(let user of users){
	console.log(user.name);

}



/* *** WeakSets

	A WeakSet is similar to a Set except that it contains only objects.
*/







