/*
	https://www.javascripttutorial.net/es6/object-literal-extensions/
	
	ES6 allows, property of an object is the same as the local variable name , without a colon and value
*/




// const createMachine = (name, status)=>{

// 	return {
// 		name: name, 			//-- Prior to ES6
// 		status: status
// 	};
// }

// console.log(createMachine('computer', 'on'));  // { name: 'computer', status: 'on' }





/* *****************************************************************
 -- ES6 allows, property of an object is the same as the local variable name , without a colon and value
*/




// const createMachine = (name, status)=>{

// 	return {
// 		name,
// 		status
// 	};
// }

// console.log(createMachine('computer', 'on'));   // same as above




/* ************************************
 -- Similarly, you can construct an object from local variables
*/



// let name = 'computer',
// 	status = 'on';


// let machine = {
// 	name,
// 	status
// };


// console.log(machine); // -- { name: 'computer', status: 'on' }





/* *****************************
	-- Computed property name

	- square brackets allow you to use the string literals and variables as the property names.
*/




// let prefix = 'machine';

// let machine = {

// 	[prefix]: 'on',
// 	[prefix+' name']: 'server',
// 	[prefix+ ' hours']: 10000
// };

// console.log( machine.prefix ); 				// undefined
// console.log( machine[prefix] ); 			// on
// console.log( machine['machine name'] ); 	// server




/* *****************************
	Concise method syntax
*/







// let server = {

// 	name: 'Server',

// 	// prior to ES6

// 	// restart : function(){
// 	// 	console.log( 'The '+this.name+' is restarting...' );
// 	// }

// 	// ES6 onwards

// 	restart(){
// 		console.log( 'The '+this.name+' is restarting...' );
// 	}

// 	// method 'starting up' has spaces in its name

// 	'starting up'(){
// 		console.log( this.name+' is starting up !' );
// 	}

// };

// console.log(  server.restart() );  // The Server is restarting..., Each function by default return `undefined`

// console.log( server['starting up']() );   // working in browser, not in nod of this version



