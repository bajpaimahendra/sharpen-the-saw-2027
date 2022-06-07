/*
	https://www.javascripttutorial.net/es6/es6-modules/

	ESM module uses `export` not `exports` expose data for  another modules

*/



/* ***  	Default exports

	- A module can have one and only one default export. 
	- The `default` for a module can be a variable, a function, or a class.

*/

const months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


const add = (a, b)=>{

	return a+b;

}


const subtract = (a, b)=>{

	return a-b;

}

	//export add;  	// produce error why , need to explore


export default  months;   // default export, will be consume as variable
export let msg = 'Hi';
export {
		add,
		subtract
		};
