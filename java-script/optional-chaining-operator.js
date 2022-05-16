/*
	https://www.javascripttutorial.net/es-next/javascript-optional-chaining-operator/
	
	
	- ES2020 introduced the optional chaining operator denoted by the question mark followed by a dot ?.
	- To access a property of an object using the optional chaining operator
		objectName ?. propertyName
		objectName ?. [expression]

	- operator (?.) allows you to access the value of a property located deep within a chain of objects with  checking if each reference in the chain is null or undefined.
	- If one of the references in the chain is null or undefined, the optional chaining operator (?.) will short circuit and return undefined.

*/

const getUser = (id)=>{

	if(id<=0){
		return null;
	}

	// get the user from database
    // and return null if id does not exist
    // ...
    // if user was found, return the user

    return {
    	id: id,
    	userName: 'admin',
    	profile:{
    		avatar: '/avatar.png',
    		language: 'English'
    	}
    };
}

let user = getUser(1);

//console.log(user);

//let profile = user.profile;   // TypeError if id is less than zero

//console.log(profile.avatar);


	// using optional chaining operator

let profile = user ?. profile;
console.log(profile);






