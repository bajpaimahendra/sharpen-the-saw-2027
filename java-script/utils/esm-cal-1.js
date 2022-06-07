/*
	https://www.javascripttutorial.net/es6/es6-modules/

	ESM module uses `export` not `exports` expose data for  another modules

	NOte : No semicolons after export class/function

*/



/* ***  Export before declarations */





// export function add(a, b) {
//         return a + b;
// }


// export function subtract(a, b) {
//         return a - b;
// }

// export let msg = 'Hi';





/* *** Export apart from declarations */




// function add(a, b) {
//         return a + b;
// }


// function subtract(a, b) {
//         return a - b;
// }

// export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// export let msg = 'Hi'; 
// export {
//   add,
//   subtract,
// };



/* ******* arrow function *************** */



const add = (a, b)=>{

	return a+b;

}


const subtract = (a, b)=>{

	return a-b;

}

	//export add;  	// produce error why , need to explore

export let msg = 'Hi';
export {
		add,
		subtract
		};










