/*
	https://www.sitepoint.com/understanding-module-exports-exports-node-js/
	
	- `module.exports` is the object that's actually returned as the result of a `require()` call.
*/




/* *** Example 1 , Exporting Multiple Methods and Values */




const add = (a, b)=>{

	return a+b;

}

const subtract = (a, b)=>{

	return a-b;

}

let msg = 'Hi';


// exports.add = add;
// exports.addition = add;     // chanage the property name
// exports.subtract = subtract;
// exports.msg = msg;



// ------ OR , // consolidated named exports ----------------------



module.exports = {
	'add':add,		// property name as string
	addition: add,
	subtract,		// propety name will  be same as value variable
	msg
};


//--- below will produce error -----



// exports = {
// 	'add':add,		// property name as string
// 	addition: add,
// 	subtract,		// propety name will  be same as value variable
// 	msg
// };










