/* ************
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

	How to access array and object elements by Destruct ( opposite of construct or build )

	It does not change an array or any object, assign the value in its own new variables 

*/




/* Array Destructuring and Assignment ********************/


[a, b] = [1, 2];
console.log(a, b);


/* *****************/


let myArr = [7, 9];
[a, b] = myArr;
console.log('a = '+a, 'b = '+b);