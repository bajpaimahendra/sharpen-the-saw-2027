/* **************************

	https://www.javascripttutorial.net/javascript-return-multiple-values/

	- To return multiple values from a function, you can pack the return values as elements of an array or as properties of an object.
*/



/* *** Example 1  Returning multiple values using an object */


// const getNames = ()=>{
// 	// get names from the database or API
// 	let firstName = 'Mahendra',
// 		lastName = 'Bajpai';

// 	// return as an array
// 	return [firstName, lastName];
// }

// let namesArr = getNames();

// console.log( namesArr);

// let firstName = namesArr[0],
// 	lastName = namesArr[1];

// console.log( firstName, lastName);


	/* **  In ES6, you can use the destructuring assignment syntax to unpack values from an array  */


// let [firstName, lastName] = getNames();

// console.log(firstName, lastName);




/* *** Example 2  Returning multiple values using an object */




const getNames = ()=>{
	// get names from the database or API

	let firstName = 'Ricah',
		lastName = 'Bajpai';

	return{
		'firstName': firstName,
		'lastName': lastName
	};
}

//let namesObj = getNames();

// console.log( namesObj );
// let firstName = namesObj.firstName,
// 	lastName  = namesObj.lastName;

// console.log(firstName, lastName);


	/* **  In ES6, you can use the destructuring assignment syntax to unpack values from an  object  */


let {firstName, lastName} = getNames();

console.log(firstName, lastName);
