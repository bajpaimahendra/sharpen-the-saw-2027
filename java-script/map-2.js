/*
	- https://www.javascripttutorial.net/es6/javascript-map/
	- https://javascript.info/map-set
*/



/* *** map with an iterable object 

	- For looping over a map, there are 3 methods
			1- map.keys() – returns an iterable for keys,
			2- map.values() – returns an iterable for values,
			3- map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
			--- same order as the values were inserted. Map preserves this order but not object
*/



// let recipeMap = new Map([			// Array inside array
// 				['cucumber', 500],
// 				['tomatoes', 350],
// 				['onion', 50]
// 				]);


// 	// iterate over keys (vegetables)
// for(let vegetable of recipeMap.keys()){
// 	console.log(vegetable);		// cucumber, tomatoes, onion
// }

// 	// iterate over values (amounts)

// for(let amount of recipeMap.values()){
// 	console.log(amount);  // 500, 350, 50
// }

// 	// iterate over [key, value] entries

// for(let entry of recipeMap.entries()){  	// the same as of recipeMap.entries()
// 	console.log(entry);
// }


// recipeMap.forEach((value, key)=>{  		 	// Map has a built-in forEach method, similar to Array
// 	console.log(key, value);
// });




/* *** Convert map keys or values to a array 
	Sometimes, you want to work with an array instead of an iterable object, in this case, you can use the spread operator.
*/



let recipeMap = new Map([			// Array inside array
				['cucumber', 500],
				['tomatoes', 350],
				['onion', 50]
				]);

let userMap = new Map([			// Array inside array
				{name: 'abc', age: 23},
				{name: 'xyz', age: 12}
				]);


// let recipeKeysArr = [...recipeMap.keys()];
// let userKeysArr   =[...userMap.keys()]

// console.log(recipeKeysArr); 	 // 	[ 'cucumber', 'tomatoes', 'onion' ]
// console.log(userKeysArr); 		// 		[ undefined ]


// let recipeValuesArr = [...recipeMap.values()];
// let userValuesArr   =[...userMap.values()]

// console.log(recipeValuesArr); 	 	// 	[ 500, 350, 50 ]
// console.log(userValuesArr); 		// 	[ undefined ]