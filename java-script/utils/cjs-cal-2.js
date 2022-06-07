/*
	https://www.sitepoint.com/understanding-module-exports-exports-node-js/
	
	- `module.exports` is the object that's actually returned as the result of a `require()` call.
*/



/* *** Example 2 ,  Exporting a Default Value 

	module.exports and exports are just alias
*/



// module.exports.add = function(a, b) {
//         return a + b;
// } 

// module.exports.subtract = function(a, b) {
//         return a - b;
// } 


// const divide = (a, b)=>{
// 	return a/b;
// }


// module.exports.msg ='Hi......';
// module.exports.quotient = divide;  // with new name of export object property



/* ******************** OR ************************ */



exports.add = function(a, b) {
        return a + b;
} 

exports.subtract = function(a, b) {
        return a - b;
} 


const divide = (a, b)=>{
	return a/b;
}


module.exports.msg ='Hi......';
exports.division = divide;  // with new name of export object property





