/*
	https://www.javascripttutorial.net/javascript-for-in/


	- The for...in loop iterates over the enumerable properties of an object.
	- Avoid using for...in loop to iterate over elements of an array, when the index order is important.


	for( const propertyName in obj ){
		
		// .........
	}

*/


//---- Example 1 -------------------------------------------



// let person = {
// 	firstName: 'Mahendra',
// 	lastName: 'Bajpai',
// 	dob: '10=03-1980'
// };

// for( const prop in person ){
// 	console.log( prop+ ' :'+person[prop] );  // value of each property using object[property];
// }




//--- Example 2  for...in loop & inheritance -----------------------------



// let decoration = {
// 	color: 'Red'
// };

// let circle = Object.create(decoration);
// circle.radius = 10;



// 	// for(const prop in circle){
// 	// 	console.log(prop);   // radius , color
// 	// 		console.log(circle[prop]);
// 	// }


// for(const prop in circle){
// 	if(circle.hasOwnProperty(prop)){
// 		console.log(prop);  // radius
// 	}
// }




//----- Example 3 -------------------------------------------



// const items = [1, 2, 3];

// let total = 0;

// for(const item in items){
// 	total += items[item];
// }

// console.log(total);


// Array.prototype.foo = 4; // for...in will not work correctly, if item added later

// for(const item in items){
// 	total += items[item];
// }

// console.log(total);



//---- Example 4 --------------------------------------------


// let arr = [];

// arr[2] = 9; // // set the third element to 3, other elements are `undefined`

// for(let i=0; i<arr.length; i++){
// 	console.log( arr[i] );    // undefined, undefined, 9

// }


// 	// for(const key in arr){
// 	// 	console.log(arr[key]);   // 9
	// }





