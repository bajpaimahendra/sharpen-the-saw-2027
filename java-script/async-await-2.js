/* *************
	 https://www.javascripttutorial.net/es-next/javascript-async-await/

	- Note : we can use the `await` keyword only inside an `async` function.
		i.e.
	if any function is using `await` inside it , it must by `async` but not vice versa	
		i.e.
	`await` works only inside async functions
*/





/* *** Example 1
	`await` keyword to wait for a Promise to settle either in resolved or rejected state.
*/



function sayHi(){
	return new Promise((resolve, reject)=>{

		// setTimeout(()=>{
		// 	resolve('Hi...');
		// },3000);

		resolve('Hi...');
	});
}

async function display(){

	let result = await sayHi(); // `await` instructs JavaScript engine to wait for the sayHi()
	console.log('inside async',result);
	return result;
}


let res =  display();
console.log('after display() call ', res);  // Promise { <pending> } because still waiting to resolve the promise



console.log('come here...........');



