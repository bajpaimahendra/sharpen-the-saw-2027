/*
	https://www.javascripttutorial.net/javascript-object-properties/
	
	- A data property has four attributes:
			[[Configurarable]] means property redefine or remove 
			[[Enumerable]]           property can be returned in the for...in loop
			[[Writable]]			 value of a property can be changed.
			[[Value]]				 contains the actual value of a property.

	- By default, the [[Configurable]] , [[Enumerable]]And [[Writable]] attributes set to true for all properties		



	- A property can be defined directly on an object
		OR
	- indirectly via the Object.defineProperty() or Object.defineProperties() methods.
	- These methods can be used to change the attributes of a property.	

*/


//---- Example 1 -------------------------------------------




// let person = {};
// person.age = 25;    // add new property

// delete person.age;   // Since default value of [[Configurable]] attribute is true, you can remove it .

// console.log( person.age ); // undefined, because age had deleted



//----- Example 2 -------------------------------------------




// 'use strict'

// let person = {};
// Object.defineProperty(
// 	person,
// 	'age',  // add new property using Object.defineProperty() method
// 	{
// 		Configurable: false,   // `Configurable` attribute is false so age property can not be delete 
// 		value: '10-03-1980'
// 	}
// );

// delete person.age;  // TypeError: Cannot delete property 'age' of #<Object>




//------- Example 3 ----------------------------------------------




// 'use strict'

// let person = {};

// person.name = 'Mahendra';
// person.age = 25;

// // - By default, [[enumerable]] attribute of all the properties on an object is true. i.e. it can iterate using for...in loop

// for(let key in person){
// 	console.log(key);
// }

// 	// age
// 	// ssn

// console.log('---------------------');

// Object.defineProperty(
// 	person,
// 	'age',
// 	{
// 		enumerable: false  // now age will not iterate 
// 	}
// );


// for(let key in person){
// 	console.log(key);
// }

// 	// name







/* ******************
	Accessor properties

	accessor properties have:
		[[Configurable]]
		[[Enumerable]]
		[[Get]]
		[[Set]]

		
*/





// let person = {
// 	firstName: 'Mahendra',
// 	lastName: 'Bajpai'
// };

// Object.defineProperty(
// 	person,
// 	'fullName',
// 	{
// 		get: function(){
// 			return this.firstName+' '+this.lastName;
// 		},
// 		set: function(val){
// 			//console.log(val);

// 		}
// 	}

// );

// console.log( person.fullName );







/*
	Define multiple properties: Object.defineProperties()
*/





// var product ={};

// Object.defineProperties(
// 	product,
// 	{
// 		name:{ value: 'SmartPhone' },
// 		price:{ value: 700 },
// 		tax: { value: 0.1 },
// 		netPrice: {
// 			get: function(){
// 				return this.price*(1+this.tax);
// 			}
// 		}
// 	}
// );

// console.log( 'The net Price Of a'+ product.name+' is '+ product.netPrice.toFixed(2)+' USD' );


// 	// -Object.getOwnPropertyDescriptor() method allows you to get the descriptor object of a property.
// let descriptor = Object.getOwnPropertyDescriptor(product, 'name');

// console.log(descriptor);
























 
