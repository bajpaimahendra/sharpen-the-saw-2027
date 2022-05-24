/* ****************************
	https://www.javascripttutorial.net/es6/javascript-static-properties/

	- A static property of a class is shared by all instances of that class.
	- Use the static keyword to define a static property.
*/



/* ******** Example 1 

*/





// class Item {

// 	static count = 0;
// 	static getCount(){
// 		return Item.count; // className.staticPropertyName; access static property inside constructor or instance methods
// 	}
// }

// console.log( Item.getCount() );





/* **** Example 2
*/



// class Item{

// 	static count = 0;
// 	constructor(name, quantity){
// 		this.name = name;
// 		this.quantity = quantity;
// 		this.constructor.count++; // this.constructor.staticPropertyName;
// 	}
// 	static getCount(){
// 		return Item.count;
// 	}
// }

// let pen = new Item('pen', 21);
// let Notebook = new Item('Notebook', 27);

console.log( Item.getCount() );  // 2



