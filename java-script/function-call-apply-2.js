/* **************************
	https://www.javascripttutorial.net/javascript-call/

*/


/* *** Example 1 ********
*/



// 	// let greeting = 'Hi';
// 	var greeting = 'Hi';  // var will availabel via `this` in `window` object



// function say(name) {
//     console.log(this.greeting + ' ' + name); // we reference the `greeting` via the `this`
// }

// say.call(this,'John');  


// var messenger = {
//     greeting: 'Hello'
// }

// say.call(messenger,'John');  





/* *** Example 2 call() method to chain constructors******** */





// function Box(height, width){
// 	this.height = height;
// 	this.width = width;
// }

// function Widget(height, width, color){
// 	Box.call(this, height, width);   // set the `this` value to the Widget object.
// 	this.color = color;
// }

// let widgetObj =  new Widget(100, 200, 'red' );

// console.log( widgetObj ); // Widget { height: 100, width: 200, color: 'red' }





/* *** Example 3  call() and apply() method for function borrowing 
	- aircraft object borrows the start() and speedUp() method of the car object.
*/



const car = {
	name: 'Car',
	start(){
		console.log('Start the '+this.name);
	},
	speedUp(){
		console.log('Speed up the '+this.name);
	},
	stop(){
		console.log('Stop the '+this.name);
	}
};

const aircraft = {
	name: 'aircraft',
	fly(){
		console.log('fly');
	}
};



// car.start.call(aircraft);
// car.speedUp.call(aircraft);
// aircraft.fly();


// car.start.apply(aircraft);
// car.speedUp.apply(aircraft);
// aircraft.fly();




/* *** Example 4 
	- JavaScript functions have a built-in object called the `arguments` object.
	- `argument` object contains an array of the arguments used when the function was called (invoked).
*/




const isOdd = function(number){
	return number%2;
}

const getOddNumbers = function(){
	return Array.prototype.filter.call(arguments, isOdd); // `arguments` object borrows the filter() method of the Array.prototype object.
}



// let result = getOddNumbers(1,2,3,4,5,6,7,8,9);
// console.log(result);
