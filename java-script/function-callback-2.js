/* **************************

	https://www.javascripttutorial.net/javascript-callback/
	
	- https://www.programiz.com/javascript/callback

	- A callback is a function passed into another function as an argument to be executed later.
	- A high-order function is a function that accepts another function as an argument.
	- Callback functions can be synchronous or asynchronous
	- If high-order function has asynchronous task( e.g api call) ,then Callback is called asynchronous callback

*/


/* ****************
	How can I create an Asynchronous function in Javascript?
	setInterval
	setTimeout
	XMLHttpRequest (AJAX)
	requestAnimationFrame
	WebSocket
	Worker
*/

/* **************
	Generally all the featuers which communicate with saver/other server and API calls are  Asynchronous
	e.g.
	`request` module in Node.js
	`http`    module in Angular
	`axios`   in React
	`fetch`  of javascript

	When first tak is depend on second task, and first task is taking time, then we will use callback or promise or async/await
	this type of callback called Asynchronous callback
*/

/* **************
 Note: The callback function is helpful when you have to wait for a result that takes time. 
 For example, the data coming from a server because it takes time for data to arrive.
*/



/* *** Example 1  getFlightDetail that take time in excution in execution*/




// function getFlightDetail(apiUrl) {
//     setTimeout(() => {   // setTimeout() to mimic the program that takes time to execute,such as data coming from the server.
//         // script to api response and parse it.
//         console.log(`getting API response ${apiUrl} ...`);
//         return flightDetail = {'flightId':1, 'price': 9000};
//     },2000);
// }

// function bookFlight(flightDetail) {
//     console.log('flightDetail ... ',flightDetail);
// }

// let apiUrl  = 'https://www.javascripttutorial.net/pic.jpg';

// let flightDetail = getFlightDetail(apiUrl);

// bookFlight(flightDetail);



	// Output

	// Book flight undefined
	// getting API response https://www.javascripttutorial.net/pic.jpg


	// The above code is executed asynchronously, 
	// the second function bookFlight() does not wait for the first function ; getFlightDetail() to complete




/* *** Example 2  Using a Callback Function*/




// function getFlightDetail(apiUrl, callbackFun) {
//     setTimeout(() => {   // setTimeout() to mimic the program that takes time to execute,such as data coming from the server.
//         // script to api response and parse it.
//         console.log(`getting API response ${apiUrl} ...`);
//         flightDetail = {'flightId':1, 'price': 9000};
//         callbackFun(flightDetail);

//     },2000);
// }

// function bookFlight(flightDetail) {
//     console.log('flightDetail ... ',flightDetail);
// }

// let apiUrl  = 'https://www.javascripttutorial.net/pic.jpg';

// let flightDetail = getFlightDetail(apiUrl, bookFlight);




/*  Example 3  Example 6 callback may be anonymous  */




// function getFlightDetail(apiUrl, callbackFun) {
//     setTimeout(() => {   // setTimeout() to mimic the program that takes time to execute,such as data coming from the server.
//         // script to api response and parse it.
//         console.log(`getting API response ${apiUrl} ...`);
//         //let flightDetail = {'flightId':1, 'price': 9000}; // data from api response
//         //var flightDetail = {'flightId':1, 'price': 9000}; // data from api response
//         flightDetail = {'flightId':1, 'price': 9000}; // data from api response
//         //callbackFun(flightDetail);
//         callbackFun(); 
//     },2000);
// }

// // function bookFlight(apiUrl) {
// //     console.log(`Book flight ${apiUrl}`);
// // }

// let apiUrl  = 'https://www.javascripttutorial.net/pic.jpg';

// getFlightDetail(apiUrl, function(param){
// 	console.log('flightDetail ... ',param); // undefined if callback is called without argument
// });

// 	// getFlightDetail(apiUrl, function(){
// 	// 	console.log('flightDetail ... ',flightDetail); 
// 	// });




/* Example 4 Handling errors */


// function getFlightDetail(apiUrl, successCallBack, failureCallBack) {
//     setTimeout(() => {   // setTimeout() to mimic the program that takes time to execute,such as data coming from the server.
//         // script to api response and parse it.
//         console.log(`getting API response ${apiUrl} ...`);
//         flightDetail = {'flightId':0, 'price': 9000}; // data from api response

//         flightDetail.flightId>0 ? successCallBack(flightDetail):failureCallBack();
//     },2000);
// }

// // function bookFlight(apiUrl) {
// //     console.log(`Book flight ${apiUrl}`);
// // }

// let apiUrl  = 'https://www.javascripttutorial.net/pic.jpg';

// getFlightDetail(apiUrl, function(){
// 	console.log('flightDetail ... ',flightDetail);
// },
// ()=>{
// 	console.log('could not get the api response...');
// }
// );






	// Nesting  callbacks is known as the pyramid of doom or the callback hell, which create complexity

	//To avoid the callback hell, we use promises or async/await functions.



// function dispaly1(callback){
// 	msg = 'Hi...111'
// 	callback(msg);
	
// }

// dispaly1(function(param){
// 	 console.log(param);
// });


/////////////////////////

// function dispaly2(callback){
// 	//var msg = 'Hi...2222'
// 	//let msg = 'Hi...2222'
// 	callback();
	
// }

// dispaly2(function(){
// 	 console.log(msg);
// });


///////////////////////////
