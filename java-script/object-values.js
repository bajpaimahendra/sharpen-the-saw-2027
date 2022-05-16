/*
	https://www.javascripttutorial.net/es-next/javascript-object-values/
	
	- Object.values() accepts an object and returns its own enumerable property’s values as an array.	

*/


const person = {
	firstName: 'Mahendra',
	lastName: 'Bajpai',
	age: 25
};

const profileArr = Object.values(person);

console.log(profileArr);  // [ 'Mahendra', 'Bajpai', 25 ]