/*
	https://www.javascripttutorial.net/javascript-objects/
	https://www.educative.io/edpresso/how-to-use-objectfromentries-in-javascript
	https://javascript.info/
	
	- Object is  “key: value” pairs: in {...}
	- Object can have a properties and a methods
	- An empty object can be created using one of two syntaxes:

*/




/* ---- create empty object by using one of two syntaxes: ---------- */


// let user = new Object();  	// "object constructor" syntax

let user = {};					// "object literal" syntax

// console.log(user);   // {}



/*-------- Add/Modify new property ---------------*/



// user.Name = 'Mahendra'; // add new property Using `dot notation`, when you know the name of the property
// user.age = 98;
// user['salary'] = 9000;  // add new property Using `square bracket`, when name of property is dynamic.

// console.table(user);

// user.Name = 'Mahendra Bajpai'; // Modify a Property

// console.table(user);



/* -------- access or get the value of a property from an object ----------------- */



// let obj1={
// 	name: 'Mahendra Bajpai',
// 	age: 16,
// 	country: 'India'
// };

// console.log( obj1.country); // using the dot (.) notation

// console.log( obj1['country']); // square bracket ([]) notation

// let prop = 'name';  // Property name stored in JS variable

// console.log( obj1[prop]); // right way to access if propery name dynamic
// console.log( obj1.prop);  // undefined



/* ----- When value of property is a function, called method ---------- */


// let person = {
// 	firstName: 'Mahendra',
// 	lastName: 'Bajpai'
// };

// function maleFemale(){
// 	return 'Male';
// }

// person.gender =  maleFemale;  // value of property is a function


// console.log(person);

// console.log(person.gender());



/* ------- Object method shorthand  ----- */


// let person = {
// 	firstName: 'Mahendra',
// 	lastName: 'Bajpai',
// 	greet: function(){
// 		console.log('Hi, \n');
// 		return 'Male'
// 	}
// };

// console.log(person.greet());



/*  ------ ES6 provides you with the concise method syntax ----- */


// let person = {
// 	firstName: 'Mahendra',
// 	lastName: 'Bajpai',
// 	greet(){
// 		console.log('Hello, ');
// 		return 'Male'
// 	}
// };

// console.log(person.greet());


/* ************** `this` value references the object that invokes the method. *******/

// let person = {

// 	firstName: 'Mahendra',
// 	lastName: 'Bajpai',
// 	greet(){
// 		console.log('Hello, ');
// 		return 'Male'
// 	},
// 	getFullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     }

// };

// console.log( person.greet());

// console.log( person.getFullName());



/* ******************************************
	You have to use square bracket to access property:
	1- property name is assigned to a variable ( property name is dynamic )
	2- The property name is number.
	3- The property name has special character.
*/



/* ***************************************************
	Example 1
*/


// let obj = {
// 	abc: 'Hello',
// };

// // let x = 'abc';

// // console.log( obj.abc );  // Hello

// // console.log( obj.x );   // undefined

// // console.log( obj[x] );  // Hello


/* ****************************************
	Example 2
*/



 let empType = 'Web Developer';

 let emp = {

	[empType]: 'Job Title',   // property(key) can be a variable
	doj: '23-12-2019',
	salary: 29000,
	900: 'tax',
	'tax slab': '10%'
};

// console.log(emp['Web Developer']);  // Job Title
// console.log( emp.empType );         // undefined
// console.log( emp[empType] );		//  Job Title

// //console.log( emp.900 );			// SyntaxError
// console.log( emp[900] );			// tax

// console.log( emp['tax slab'] ); 	// 10%

// console.log( emp.salary ); 			// 29000

// let sal ='salary';

// console.log( emp.sal );  			// undefined

// console.log( emp[sal] );  			// 29000



// console.log( emp.doj );				// 23-12-2019  access by dot(.)
// console.log( emp['doj'] ); 			// 23-12-2019  access by squire bracket ( [] ) too




/*

What is the difference between object keys with quotes and without quotes?

obj = {'foo': 'bar'}  AND obj = {foo: 'bar'} has No difference

difference if you use a numeric literal as a property name

obj = {'12e34': 'bar'}  AND obj = {12e34: 'bar'} has  difference


NOTE, the JSON data exchange format does require double quotes around identifiers (and does not allow single quotes).

*/



/* *** Property value shorthand */


function makeUse(name, age){
	return {
		name,   // same as name: name
		age, 	// same as age: age
	};
}


let userObj = makeUse('Mahendra', 40);
console.log(userObj);


















