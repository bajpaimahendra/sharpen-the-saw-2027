/*

	https://www.sitepoint.com/understanding-module-exports-exports-node-js/

	https://blog.logrocket.com/commonjs-vs-es-modules-node-js/

	$ node module-cjs-1.js
*/




 const myUtil = require('./utils/cjs-cal-1');  	// Select ALL fields from export obj

let sum1 = myUtil.add(2, 7);
let difference1 = myUtil.subtract(9, 3);

console.log('sum1 = ',sum1);
console.log('msg = ', myUtil.msg);
console.log('difference1 = ', difference1);


console.log('----------Example 2 ---------------------');

	/* **************  OR ,  destructuring exported properties ********* */



 const {add, subtract, addition, msg} = require('./utils/cjs-cal-1');  	// Select fields from export obj


let sum2 = add(20, 70);
let sum3 = addition(20, 90);
let difference2 = subtract(9, 3);

console.log('sum2 = ', sum2);
console.log('sum3 = ', sum3);
console.log('msg = ', msg);
console.log('difference2 = ', difference2);


/* ***
	
		we can call require() inside a conditional statement like:

		if(user.length > 0){
		   const userDetails = require(‘./userDetails.js’);
		   // Do something ..
		}


		But not possible in import
		
*/










