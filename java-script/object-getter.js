/* ****************************
	https://www.javascripttutorial.net/es6/javascript-class/
*/


/* ****************************
	getter in an object literal
*/



let user = {
	firstName: 'Mahendra',
	lastName: 'Bajpai',
	get fullName(){   /// 
		return this.firstName+' '+this.lastName;
	}
};

console.log( user );
console.log( user.fullName );   // Mahendra Bajpai