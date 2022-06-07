/*

	https://www.javascripttutorial.net/es6/es6-modules/

	https://javascript.info/modules-intro (examples for browser)
	https://javascript.info/import-export (examples for Node)

	ESM module uses `export` not `exports` expose data for  another modules
	

	$ npm init -y
	$ npm install --save esm
	$ npm install --save express

	$ node -r esm module-esm-1.js


*/


let sum3 = add(2, 7);
let difference3 = subtract(9, 3);

console.log('sum3 = ', sum3);
console.log('difference3 = ', difference3);
console.log(msg);


console.log('--- import/export statements at the top or at the bottom of a script, that doesn’t matter. ---');



import {add, subtract, msg} from  './utils/esm-cal-1';  	// destructuring exported properties



let sum1 = add(2, 7);
let difference1 = subtract(9, 3);

console.log('sum1 = ', sum1);
console.log('difference1 = ', difference1);
console.log(msg);



/* ***
	Please note that import/export statements don’t work if inside {...}.
	if (something) {
	  import {sayHi} from "./say.js"; // Error: import must be at top level
	}

	if we really need to import conditionally. see dynamic imports
*/

















