/* **********************
	
		https://www.javascripttutorial.net/es6/javascript-promises/

		- callbacks are used to deal with an asynchronous operation *****
		- Nesting  callbacks ( callback hell ) which create complexity
		- To avoid the callback hell, we use promises or async/await functions


		- A promise is an object that encapsulates the result of an asynchronous operation.
		- A promise object has a state that can be one of the following:
				Pending
				Fulfilled with a value
				Rejected for a reason
		- A promise is an object that encapsulates the result of an asynchronous operation.


*/

/* Creating a promise ***********************
	- To create a promise object, you use the Promise() constructor:
	- constructor accepts a callback function that typically performs an asynchronous operation.
	- this  callback further accepts two callback functions with the name resolve and reject

*/

const promiseObj = new Promise((myResolve, myReject)=>{
	  myResolve('OK'); // when successful
  	  myReject('error');  // when error
  	  // Note: only one will be excute at a time.
});


/* Consuming a Promise: then, catch, finally ****************
	- Promise.then() takes two arguments, a callback for success and another for failure.
	- Both are optional, so you can add a callback for success or failure only.
*/

promiseObj.then(
  function(value) { console.log(value); /* code if successful */ },  //-- for myResolve
  function(error) { console.log(error); /* code if some error */ }  //--  for myReject
);






