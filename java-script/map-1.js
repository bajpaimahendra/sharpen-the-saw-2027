/*
	- https://www.javascripttutorial.net/es6/javascript-map/
	- https://javascript.info/map-set

	- Regular Object convert keys to string or Symbol
*/

let companyAddress = {plotNo: 456, companyName: 'Contec Global'};

let user ={
	firstName: 'Mahendra',
	lastName: 'Bajpai',
	companyAddress: 'India', // cannot use an object as a key
};

console.log(user);

/* ***
	
	- An object to mapping a key(property) to a value.
	- But using an object as a map has some side limitation:
			1- An object always has a default key like the `prototype`.
			2- A key of an object must be a string or a symbol, you cannot use an object as a key.
			3- An object does not have a property that represents the size.

	- ES6 provides a new collection type called `Map`
	- `Map` object holds key-value pairs, key and value can be any type (string, object etc). i.e. Any type of key is possible.
	- `Map` object remembers order of the keys.

*/

/* *** 	Map methods

	- new Map() – creates the map.
	- map.set(key, value) – stores the value by the key.
	- map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
	- map.has(key) – returns true if the key exists, false otherwise.
	- map.delete(key) – removes the value by the key.
	- map.clear() – removes everything from the map.
	- map.size – returns the current element count.
*/



/* *** Create a new Map object */


let myMap = new Map();

	//-- Add elements to a Map

myMap.set('1', 'str1'); 	 // string key
myMap.set(1, 'num1'); 		// number key
myMap.set(true, 'bool1');  // boolean key

myMap[9]=123;  			  // map[key] also works, this is treating map as a plain object


	//-- set() method is chainable

myMap.set('firstName', 'Mahendra')
	 .set('lastName', 'Bajpai');

console.log(myMap);


	//-- regular Object convert keys to string, however Map keeps the type.

console.log( myMap.get(1) ); 	// num1, keys are is converted to strings
console.log( myMap.get('1') );	// str1
console.log( myMap.size);
console.log( myMap.get(9) ); 	// undefined

console.log( myMap[9] ); 		// 123



