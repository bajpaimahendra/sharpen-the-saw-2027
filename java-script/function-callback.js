/* **************************

	https://www.javascripttutorial.net/javascript-callback/
	
	- callback is a function that you pass into another function as an argument for for later execution
	- The benefit of using a callback function is that we can wait for the result of a previous(high-order) function
	
	- https://www.programiz.com/javascript/callback
*/



/* *** Example 1 */



function isOdd(number){
	// if(number%2!=0){
	// 	return number;
	// }
	return number%2!=0;
}
function isEven(number){
	return number%2==0;
}



function filter(numbersArr, fn){
	let resultArr = [];
	for(const number of numbersArr){
		//if(isOdd(number)){
		if(fn(number)){
			resultArr.push(number);
		}
	}
	return resultArr;
} 


 let numbers = [1, 2, 3, 4, 5, 6, 7,  8, 9];

// console.log( filter(numbers, isOdd) );
// console.log( filter(numbers, isEven) );

	
/* Example 2 callback can be anonymous */


// let oddNUmbers = filter(numbers, function(number){
// 	return number%2!=0;
// });
// console.log(oddNUmbers);



	/* Example 3 callback can be arrow */



// let evenNumbers = filter(numbers, (number)=>{
// 	return number%2 == 0;
// });	
// console.log(evenNumbers);




/*
	NOTE : Synchronous callback is executed during the execution of the high-order function
	The isOdd and isEven are examples of synchronous callbacks
		because they execute during the execution of high-order function filter()

	Asynchronous => we can move to another task before the previous one finishes.
		 
*/






