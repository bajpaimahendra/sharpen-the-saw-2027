/* *************
	 https://www.javascripttutorial.net/es6/promise-chaining/
	 
	Sometimes, we want to execute two or more related asynchronous operations, where the next operation starts with the result from the previous step
	- When we return a value in the then() method, the then() method returns a new Promise
	Note that the setTimeout() function simulates( mimic ) an asynchronous operation.
*/


/* **** Multiple handlers for same promise
	When you call the then() method multiple times on a promise, it is not the promise chaining
	- 

*/




// let p = new  Promise((resolve, reject)=>{


// 	setTimeout(()=>{
// 		resolve(10);
// 	},3000);
// });


// p.then((res1)=>{
// 	console.log(res1);   // 10
// 	return res1*2;
// });


// p.then((res2)=>{
// 	console.log(res2);   // 10 , because Consuming same promise
// 	return res2*3;
// });




/* ****  promise  chaining , pass the result of the previous step to the next one.
	- if then() method returns, it's a new Promise. we can consume it in net then()
*/




// let p = new Promise((resolve, reject)=>{

// 	setTimeout(()=>{
// 		resolve(10);
// 	},3000);
// });

// let p2 = p.then((res1)=>{
// 	console.log(res1); 	// 10
// 		return res1*2; 		// retrun a promise, pass the result of the previous step to the next one.
// 	}).then((res2)=>{
// 		console.log(res2); 	//20
// 		return res2*3 	// // retrun a promise
// 	});


// p2.then((value)=>{
// 	console.log(value); 	//60
// });



/* ****  promise  chaining , pass the result of the previous step to the next one.
	- if then() method returns, it's a new Promise. we can consume it in net then()
*/




function getUser(userId){
	//console.log('\n... inside getUser function ...');
	//console.log('userId ',userId);
	return new Promise((resolve, reject)=>{
		console.log('Get the user detail from database.');
		setTimeout(()=>{
			resolve( {userId: userId, username:'admin'} );
		},3000);
	});
}

function getServices(user){
	//console.log('\n... inside getServices function ...');
	//console.log(user);
	return new Promise((resolve, reject)=>{
		console.log(`Get the services of ${user.username} from the API`);
		setTimeout(()=>{
			resolve(['Email', 'VPN', 'CDN']);
		}, 3000);
	});
}


function getServiceCost(services){
	console.log('\n... inside getServiceCost function ...');
	return new Promise((resolve, reject)=>{
		if(services==undefined){
			reject('count not get services!!!');
		}
		console.log(`Calculate the service cost of ${services}.`);
		setTimeout(()=>{
			resolve(services.length * 100);
		}, 3000);
	});
}


		// getUser(100)
		// 	.then((res)=>{console.log(res)});



		getUser(100)
		    .then(result => getServices(result))
		    .then(result => getServiceCost(result))
    		.then(console.log);

    		//------------ OR --------------------

		// getUser(100)
		// 	.then(getServices)         // res is result of  above , getUser
		// 	.then(getServiceCost)  // res2 is resutlt of above , getServices
		// 	//.then((cost)=>console.log(cost));
		// 	.then(console.log);