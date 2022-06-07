/*
	https://www.javascripttutorial.net/javascript-array/

	`Array` a special data structure , to store ordered collections.


*/



/* ***  two syntaxes for creating an empty array:  */


// let arr = new Array();

// let arr = [];



/* ************************************* */


// let colors = new Array('Red', 'Green', 18);
// console.log(colors);


// let scores = [2,4, 6, 8];
// console.log(scores);





/* ***  	Accessing array elements   
		
		arrayName[index]
*/



// let colors = ['Red', 'Yellow', 'Green'];

// console.log( colors[0] );
// console.log( colors[1] );


// colors[1] = 'Pink';   //  change the value of an element

// console.log( colors );


// console.log( 'array length/size = ', colors.length  );  // Getting the array size





/* *** Adding an element to the end of an array */


// let colors = ['Red', 'Yellow', 'Green'];

// colors.push('Pink');   	// by push()
// console.log(colors);

// 		//-- OR --

// colors = [...colors, 'Pink'];  // by spread operator
// console.log(colors);



/* *** Adding an element to the beginning of an array */



// let colors = ['Red', 'Yellow', 'Green'];


// colors.unshift('Pink');   // using unshift()
// console.log(colors);

	// -- OR --

// colors = ['Pink', ...colors];   // using spread operator
// console.log(colors);




/* *** Removing an element from the end of an array */



// let colors = ['Red', 'Yellow', 'Green'];

// let lastElement = colors.pop();

// console.log(lastElement);
// console.log(colors);



/* *** Removing an element from the beginning of an array */



// let colors = ['Red', 'Yellow', 'Green'];

// let firstElement = colors.shift();

// console.log(firstElement);
// console.log(colors);



/* **** index of an element in the array  */




// let colors = ['Red', 'Yellow', 'Green'];

// let index = colors.indexOf('Green');

// console.log(index);  	// 2




/* ****   Check if an value is an array  */





let colors = ['Red', 'Yellow', 'Green'];

console.log( Array.isArray(colors) );  	//  true



