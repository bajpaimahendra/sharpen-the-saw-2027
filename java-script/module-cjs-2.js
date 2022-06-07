/*

	https://www.sitepoint.com/understanding-module-exports-exports-node-js/

	https://blog.logrocket.com/commonjs-vs-es-modules-node-js/

	$ node module-cjs-1.js
*/





 const myUtil = require('./utils/cjs-cal-2');  	// Select ALL fields from export obj

let sum1 = myUtil.add(2, 7);
let difference1 = myUtil.subtract(9, 3);

console.log('sum1 = ', sum1);
console.log('difference1 = ', difference1);


console.log('-----------Example 2--------------------');

	/* **************  OR ,  destructuring exported properties ********* */



 const {add, subtract, division} = require('./utils/cjs-cal-2');  		// Select fields from export obj


let sum2 = add(20, 70);
let difference2 = subtract(9, 3);
let quotient2 = division(20, 90);


console.log('sum1 = ', sum1);
console.log('difference2 = ', difference2);
console.log('quotient2 = ', quotient2);











