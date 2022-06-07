/*
	- https://www.javascripttutorial.net/es6/javascript-map/
	- https://javascript.info/map-set
*/


//-- When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization




// let map1 = new Map([
// 		     ['1', 'str1'],
// 		     [1, 'num1'],
// 		     [true, 'bool1']	
// 		  ]);

// console.log( map1.get(1) );




/* *** 	Convert Object to Map  

	- If we have a plain object, and we’d like to create a Map from it.
	- Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.
	
*/




// let myObj = {
// 	name: 'Mahendra',
// 	age: 30
// };

// 	//console.log( Object.entries(myObj) ); 

// let map2 = new Map(Object.entries(myObj)); 

// console.log(map2);   // Map { 'name' => 'Mahendra', 'age' => 30 }, this is map 





/* *** 	Convert Map to Object  

	Object.fromEntries(map.entries())
	
*/



// let fruitsArr = [
// 				['banana',10],
// 				['orange',20],
// 				['apple',30]
// 			 ];

// let fruitsObj1 = Object.fromEntries(fruitsArr);
// let fruitsObj2 = Object.fromEntries(fruitsArr.entries());

// console.log('fruitsObj1 ', fruitsObj1);
// console.log('fruitsObj2 ', fruitsObj2);




let myMap = new Map();
myMap.set('banana', 1)
	.set('orange', 20)
	.set('apple', 30);

console.log(myMap);	

let obj1 = Object.fromEntries(myMap);
let obj2 = Object.fromEntries(myMap.entries()); // same as above


console.log('obj1 ',obj1);
console.log('obj2 ', obj2);



/* *** WeakMap
	A `WeakMap` is similar to a `Map` except the keys of a `WeakMap` must be objects.
*/



