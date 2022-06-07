/*
	https://www.javascripttutorial.net/javascript-boolean-type/

	- boolean primitive type has two literal values: `true` and `false`.
	- The boolean’s literal values are case-sensitive. means `True` and `False` are valid identifiers but they’re not boolean values.

*/



/* ***  types cast to boolean values `Boolean()` */






// let error = 'An error has occoured';   // string

// let isErr =  Boolean(error);    	// type casting string to boolean

// console.log(isErr);  	// true, which is boolean



/* ***********************************
	- if statement executes a block if a condition is true.

	If you use a non-boolean value, it’ll use the Boolean() function to implicitly for type casting
*/


// let error = 'An error has occoured';

// if(error){  // Boolean() function convert to true because error vriable is not empty
// 	console.log('come here');
// }




// let error ='';

// if (error) { // convet to false because error variable is empty
// 	console.log('come here');
// }