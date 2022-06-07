/* *************
	 https://www.javascripttutorial.net/es6/promise-error-handling/

	
*/


/* **** Example 1, Normal error :  throw an error outside the promise */



// function getUserById(id){
 
// 	if(typeof id!='number' || id<=0){
// 		throw new Error('invalid id argument');
// 	}

// 	return new Promise((resolve, reject)=>{
// 		resolve({
// 			id:id,
// 			username: 'admin'
// 		});
// 	});
// }
// 		//--- The code throws an error:

// 		// getUserById('a')
// 		// 	.then((userDetail)=>{console.log(userDetail)})
// 		// 	.catch((err)=>{console.log(err)});

// 		//-- When we raise an exception outside the promise, we must catch it with try/catch

// 		try{

// 		getUserById('a')
// 			.then((userDetail)=>{console.log(userDetail)})
// 			.catch((err)=>{console.log(err)});
// 		}catch(e){
// 			console.log(`Caught by try/catch ${e}`);    // Caught by try/catch Error: Invalid id argument
// 		}




/* *** Example 2, Errors inside the Promises 
	- If we throw an error inside the promise, the catch() method will catch it, not the try/catch.

	- If we does not provide the catch() method to handle the error inside the promise. It will cause a runtime error
*/





// let authorized = false;

// function getUserById(id){

// 	return new Promise((resolve, reject)=>{

// 		if(!authorized){
// 			throw new Error('Unauthorized access to the user data');
// 		}

// 		resolve({
// 			id: id,
// 			username: 'admin'
// 		});

// 	});
// }

// try{
// getUserById(9)
// 	.then((userDetail)=>{console.log(userDetail)})
// 	.catch((error)=>{console.log('Caught by  .catch '+error)});

// }catch(err){
// 	console.log(`Caught by try/catch ${err}`);
// }




/* *** Calling reject() callbac 

	- Throwing an error has the same effect as calling the reject()
	- Inside the promise, the catch() method will catch the error caused by the throw statement and reject()
*/


let authorized = false;

function getUserById(id){
	return new Promise((resolve, reject)=>{
		if(!authorized){
			reject('Unauthorized access to the user data');

		}
		resolve({
			id:id,
			username: 'admin'
		});
	});
}


try{

	getUserById(9)
		.then(
			(userDetail)=>{console.log(userDetail)}, 
			//(errRej)=>{console.log(`reject callback inside then() ${errRej}`)}
			)
		.catch((err)=>{console.log(`Caught by .catch ${err}`)});

}catch(error){
	console.log(`Caught by try/catch ${error}`);
}





