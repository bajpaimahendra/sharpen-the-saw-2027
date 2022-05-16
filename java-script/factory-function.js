/*
	https://www.javascripttutorial.net/javascript-factory-functions/
	
	- When a function creates and returns a new object, it is called a factory function.
	
*/



//--- Example 1 -----------------




// let person1 = {
// 	firstName: 'Mahenra',
// 	lastName: 'Bajpai',
// 	getFullName: function(){
// 		return this.firstName+' '+this.lastName
// 	}
// };

// console.log(  person1.getFullName() );

// let person2 = {
// 	firstName: 'Richa',
// 	lastName: 'Bajpai',
// 	getFullName: function(){
// 		return this.firstName+' '+this.lastName;
// 	}
// };

// console.log(  person2.getFullName() );




	// -- To avoid copying the same code all over again





function createPerson(firstName, lastName){
	return {
		firstName: firstName,
		lastName: lastName,
		getFullName(){
			return this.firstName+' '+this.lastName;
		}
		// getFullName: function(){
		// 	return this.firstName+' '+this.lastName;
		// }
	};
}

	// -- By using the factory function, you create any number of the person objects without duplicating code.
	
let p1 = createPerson('Amit', 'Awasthi');
let p2 = createPerson('Shailesh', 'Ojha');

console.log( p1.getFullName() );
console.log( p2.getFullName() );


