/*
	https://www.javascripttutorial.net/es6/destructuring/

	- Destructuring means elements of an array into individual variables.
	- This feature is available form ES6

	- let [x, y, z] = scoresArr; NOTE: square brackets [] in left look like the array syntax but they are not.
*/

/*  Example 1 ***************************

*/

// let [firstName, lastName] = ['Mahendra', 'Bajpai'];
// console.log(firstName, lastName);

	//-- OR

let firstName, lastName;
[firstName, lastName] = ['Mahendra', 'Bajpai']
console.log(firstName, lastName);



/* Example 2 ************************
*/	


// function getScores(){
// 	return [70, 80, 90]
// }
// let scoresArr = getScores();

	// let x = scoresArr[0],		// access array element in ES5
	// 	y = scoresArr[1],
	// 	z = scoresArr[2];

	// console.log(x, y, z);


// let [x, y, z] = scoresArr;      // access array element in ES6, NOTE: square brackets [] in left look like the array syntax but they are not.

// console.log(x, y, z);



/* Examle 3 ******************************************

	Array Destructuring and Rest syntax
	- take all remaining elements and put them in a new array by using the rest syntax (...)

*/

// let [name, company, ... parmsArr] = ['Mahendra Ji', 'Contec Global', '10-03-1980', 25];
// console.log(name, company);

// console.log(parmsArr);

// let[dob, age] = parms;
// console.log(dob, age);



/* Example 4 ******************************
*/



// let getNumbers = ()=>{
// 	return [10, 20, 30, 40, 50];
// }

// let [a, b, c, ...argsArr] = getNumbers();

// console.log(a, b, c);
// console.log(argsArr);

// let [x, y] = argsArr;
// console.log(x, y);



/* Example 5 Swapping variables *********************
*/




// let a = 2,
// 	b = 3;

// console.log(' a = '+a, ' b = '+b);	

// [b, a] = [a, b];

// console.log(' a = '+a, ' b = '+b);	




/* Example 6 Functions that return multiple values *********************
*/





// const getStat = (a, b)=>{
// 	return [

// 	a+b,
// 	a-b,
// 	(a+b)/2

// 	]
// }

// let [sum, difference, average] = getStat(2,4);

// console.log(sum, difference, average); 	// 6 -2 3
























