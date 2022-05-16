/*
	https://www.javascripttutorial.net/es6/javascript-object-destructuring/
	
	- Destructuring => destroy the structure of something
	- destruct an object into individual variables. 
	- object destructuring => assigns properties of an object to individual variables.

*/




// let person = {
// 	firstName: 'Mahendra',
// 	lastName: 'Bajpai'
// };




/* ***************
	in ES5 -----
*/


// let fName = person.firstName;
// let lName = person.lastName;

// console.log(fName,lName);




/* ******************
	in ES6  Method 1-----
*/


// let {firstName: fName, lastName: lName} = person;  		// let { property1: variable1, property2: variable2 } = object;

// console.log(fName, lName);




/* *********************
 	in ES6  Method 2-----
*/



// let {firstName, lastName} = person; 	// If the variables have the same names as the properties of the object

// console.log(firstName, lastName);



/* ***********************
	in ES6  Method 3-----
*/


// ( {firstName, lastName}=person );

// console.log(firstName, lastName);




/* *******************
	in ES6  Method 4
*/


	// if property that does not exist on object, variable will be undefined


// ( {firstName, middleName, lastName}=person );

// console.log(middleName); 
// console.log( firstName, lastName);




/* **********************
	Setting default values
*/



// ( {firstName,middleName='', lastName, age=25}=person );

// console.log(age);




/* ********************
	Destructuring a null object 
	// - A function may return an object or null in some situations.
*/




// function getPerson(){
// 	return null;
// }

// // let {firstName, lastName} = getPerson();   // TypeError: Cannot destructure property 


// 	// -To avoid this, you can use the OR operator (||) to fallback the null object to an empty object
// let {firstName, lastName}=getPerson() || {};
// console.log(firstName, lastName); //undefined but not TypeError: Cannot destructure property 




/* ****************************
	Nested object destructuring
*/





// let employee = {
// 	id: 1001,
// 	name:{
// 		firstName: 'Mahendra',
// 		lastName: 'Bajpai'
// 	}
// };


// 	// let {
// 	// 	name:{firstName, lastName}
// 	// } = employee;

// 	// console.log(firstName, lastName);


// let {
// 	name,
// 	name:{ firstName, lastName},
// 	id
// } = employee;

// console.log(firstName, lastName, id);
// console.log(name);




/* **************************************
	Destructuring function arguments
*/


	//-- normal function that displays the person object as follows

	let display1 = function(person){
		console.log(person.firstName);
		console.log(person.lastName);
	}

	//-- Arrow function that displays the person object as follows

	let display2 = (person)=>{
		console.log(person.firstName);
		console.log(person.lastName);
	}


	//-------  destructure the object argument passed into the function

	let display3 = function({firstName,lastName}){
		console.log(firstName);
		console.log(lastName);
	}

	let person = {
		firstName: 'Mahendra',
		lastName: 'Bajpai'
	};


	display1(person);
	display2(person);
	display3(person);

