/* ****************************
	https://www.javascripttutorial.net/es6/javascript-class-expressions/

	- Similar to functions, classes have expression forms.
*/


/* **** Example 1 ******************
*/




// let Person = class {

// 	constructor(firstName, lastName){
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}
// 	getName(){
// 		return this.firstName+' '+this.lastName;
// 	}
// }

// let p1 = new Person('Mahendra', 'Bajpai');
// console.log( p1.getName() );




/* **** Example 2 *************

	- JavaScript classes are first-class citizens. It means that you can pass a class into a function,
*/




// function factory(aClass){
// 	return new aClass();
// }

// 	// call the above funciton with argument class declration

// let obj =  factory(
// 		class {
// 			sayHi(){
// 				console.log(  'Hi' );
// 			}
// 		}
// );

// obj.sayHi();



/* *** Example 3 ***********************

*/




let app = new class{

	constructor(name){
		this.name = name;
	}
	start(){
		console.log( `Starting the ${this.name} ...` );
	}
}('Awesome App');


app.start();
