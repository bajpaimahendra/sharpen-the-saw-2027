/* *************
	 https://www.javascripttutorial.net/es-next/javascript-async-await/

	- to deal with asynchronous operations, we used the callback functions.
	- However, many nested callbacks(callback hell), the code will be more difficult to maintain.
	- To avoid this callback hell issue, ES6 introduced the promises, to deal with asynchronous operations.
	- ES2017 introduced the async/await keywords that build on top of promises.
	- Technically, the async / await is syntactic sugar for promises.
	
*/

//- To avoid this callback hell issue, ES6 introduced the promises 

function getUser(userId){
	return new Promise((resolve, reject)=>{
		console.log(`Get user form the database.`);
		setTimeout(()=>{  	// setTimeout() function to simulate(mimic) the asynchronous operation.
			resolve({
				userId: userId,
				username: 'admin'
			});
		}, 3000);
	});
}


function getServices(userDetail){
	return new Promise((resolve, reject)=>{
		console.log(`Get services of ${userDetail.username} form the API`);
		setTimeout(()=>{
			resolve(['Email', 'VPN', 'CDN']);
		}, 3000);
	});
}


function getServiceCost(services){
	return new Promise((resolve, reject)=>{
		console.log(`Calculate service cost of ${services}`);
		setTimeout(()=>{
			resolve(services.length * 100);
		}, 3000);
	});
}



	// getUser(9)
	// 	.then(getServices)
	// 	.then(getServiceCost)
	// 	.catch((err)=>{ console.log(err);});


		//--- using async/await

	// async function showServiceCost(){
	// 	let userDetail = await getUser(9);
	// 	let services = await getServices(userDetail);
	// 	let totalCost = await getServiceCost(services);
	// 	console.log(`service cost is ${totalCost}`);
	// }

// showServiceCost();


/* *** The `async` and `await` keyword
The await keyword
	- `async` keyword use to define a function that handles asynchronous operations.
	- `await` will wait for the Promise to settle either in resolved or rejected state.
	- Note : we can use the `await` keyword only inside an `async` function
	
*/



/* ****
	- To define an async function, place the async keyword in front of the function keyword.
	- Asynchronous functions execute asynchronously via the event loop. It always returns a Promise. 

*/

/* *** Example 1 */


// async function sayHi(){
// 	return 'Hi';
// }

	// let msg = sayHi();
	// console.log(msg);

	//sayHi().then((res)=>{console.log(res)});

	//sayHi().then(console.log);

	// sayHi()
	// 	.then((res)=>{console.log(res)})
	// 	.catch((err)=>{console.log(err);});



/* *** Example 2 
	we can also explicitly return a ``Promise from `async` function
*/


// async function sayHi(){
// 	return Promise.resolve('Hi');
// }


// sayHi()
// 	.then((res)=>{console.log(res)})
// 	.catch((err)=>{console.log(err)});




/* *** Example 3 
	we can use the `async` keyword in the function expressions (i.e anonymous function)
*/


// const sayHi = async function(){

// 	return 'Hi...';

// 	//return Promise.resolve('Hi');
// }

// sayHi()
// 	.then((res)=>{console.log(res);})
// 	.catch((err)=>{console.log(err);});





/* *** Example 4
	we can use the `async` keyword in the arrow function
*/




// const sayHi = async () => 'Hi...';

// sayHi()
// 	.then((res)=>{console.log(res);})
// 	.catch((err)=>{console.log(err);});



/* *** Example 5
	we can use the `async` keyword in method of class
*/



class Greeter{

	async sayHi(){
		return 'Hi';
	}
}

let greetObj = new Greeter();
greetObj.sayHi()
		.then((res)=>{console.log(res)})
		.catch((err)=>{console.log(err)});










