/*

	https://www.javascripttutorial.net/es6/es6-modules/

	ESM module uses `export` not `exports` expose data for  another modules
	


	$ node -r esm module-esm-1.js


*/




/* *** 		Import *
	
	- If there’s a lot to import, we can import everything as an object using import * as <obj>
*/





// import * as cal  from  './utils/esm-cal-1';

// //console.log(cal);

// let sum1 = cal.add(2, 7);
// let difference1 = cal.subtract(9, 3);

// console.log('sum1 = ', sum1);
// console.log('difference1 = ', difference1);
// console.log('msg = ', cal.msg);





/* *** 		Import “as”
	
	- We can also use as to import under different names.
*/




// import {add as addition, subtract as subtraction, msg as message} from './utils/esm-cal-1';



// let sum1 = addition(2, 7);
// let difference1 = subtraction(9, 3);

// console.log('sum1 = ', sum1);
// console.log('difference1 = ', difference1);
// console.log('msg = ', message);





/* *** Consume  default Export
	
	- Named Exports vs Default Exports
		- one can have multiple named exports per file
		- default export will be one and only one
*/



import months, {add, subtract, msg} from './utils/esm-cal-2';



let sum1 = add(2, 7);
let difference1 = subtract(9, 3);

console.log('sum1 = ', sum1);
console.log('difference1 = ', difference1);
console.log('msg = ', msg);
console.log('msg = ', months);  // months is default export by esm-cal-2, and consume here as variable rather than object

/* ***

Import:
	1- Importing named exports:
	import {x [as y], ...} from "module";

	2- Importing the default export:
	import x from "module"
	import {default as x} from "module"

	3- Import all:
	import * as obj from "module"

	
	


*/






