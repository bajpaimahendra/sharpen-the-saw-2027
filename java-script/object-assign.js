/*
	https://www.javascripttutorial.net/es6/javascript-object-assign/
	
	- Object.assign() assigns enumerable and own properties from a source object to a target object
	- Object.assign() can be used to clone an object or merge objects.

	Object.assign(target, ...sources)

	
*/



//--- Example 1 -----------------





// let widget = {
// 	color: 'red'
// };

// let cloneWidget = Object.assign({}, widget);

// console.log(cloneWidget);





//----  Example 2 Object.assign() to merge objects ------------------

// - If the source objects have the same property, the property of the later object overwrites the earlier one:


let box = {
	height: 10,
	width: 20,
	color: 'Blue'
};

let style = {
	color: 'Red',   		// overwrites the earlier property
	borderStyle: 'solid'
};

let styleBox =  Object.assign({}, box, style);

console.log(styleBox);


