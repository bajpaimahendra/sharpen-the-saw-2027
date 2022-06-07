/* **********************
	
		https://www.javascripttutorial.net/es6/javascript-promises/


*/



let success = ''; // To mimic or simulate the error
success = true;
//success = false;

function getUsers(){

	return new Promise((myResolve, myReject)=>{
		setTimeout(()=>{ 	// To mimic asynchronous, which take time
			if(success){
				myResolve(
					[
					{userName: 'Mahendra', email: 'mbajpai@contecglobal.com'},
					{userName: 'Richa', email: 'richa@contecglobal.com'}
					]
				);
			}else{
				myReject('Failed to get users list.');
			}
		}

		,2000);
	}

	);
}

		// function onFullfilled(users){
		// 	console.log(users);
		// }

		// function onRejected(error){
		// 	console.log(error);
		// }

		// const usersPromiseObj = getUsers();
		// 	//console.log(usersPromiseObj);
		// usersPromiseObj.then(onFullfilled, onRejected);



/* ****** use the arrow functions as the arguments of the then() method */

		// const usersPromiseObj = getUsers();
		// usersPromiseObj.then(
		// 	(usersList)=>console.log(usersList),
		// 	(error)=>console.log(error)
		// );

/* Consuming a Promise: catch() method **********
	If we want to get the error only when the state of the promise is rejected
*/		



		// const usersPromiseObj = getUsers();
		// usersPromiseObj.catch(
		// 	(error)=>console.log(error)
		// );


/* Consuming a Promise: finally() method **********
	If we want to execute the same piece of code whether the promise is fulfilled or rejected.
*/


	// const usersPromiseObj = getUsers();

	// const render = ()=>{
	// 	// .......
	// }

	// usersPromiseObj.finally(
	// 	()=>{
	// 		render();
	// 		console.log('Callback inside finally will always execute, promise is fullfilled or rejected');
	// 	}
	// );


/* *** Consuming a Promise: then, catch, finally ***
	- if then() method returns, it's a new Promise.
*/	


		const render = ()=>{
			console.log('Good Job !!!!!');
		}

		const usersPromiseObj = getUsers();

let p2 = 	usersPromiseObj.then(
			(users)=>{console.log(users); return 2+7},
			
		)
		.catch(
			(error)=>console.log(error),
		)
		.finally(
			()=>{
				render();
				console.log('Callback inside finally will always execute, promise is fullfilled or rejected');
			}
		);

console.log('abc = ', p2);

p2.then((value)=>console.log(value))		