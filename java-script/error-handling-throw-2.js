/*
	https://www.javascripttutorial.net/javascript-throw-exception/

	- `throw` statement allows you to throw an exception.
	- `throw` statement,  stops execution, and passes the control to the first `catch` block

	throw expression;

	- Typically, you’ll use a new instance of the Error class or its subclasses.

*/



// function add(x, y){
// 	if(typeof x !=='number'){
// 		throw 'The first argument must be a number';
// 	}
// 	if(typeof y!=='number'){
// 		throw 'The second argument must be a number';
// 	}
// 	return x+y;
// }



// try{
// 	const result = add('a', 10);
// 	console.log(result);
// }catch(e){
// 	console.log(e);
// }



/* *** throw an instance of the Error class */




// function add(x, y){
// 	if(typeof x!=='number'){
// 		throw new Error('The first argument must be a number');
// 	}
// 	if(typeof y!=='number'){
// 		throw new Error('The second argument must be a number');
// 	}
// 	return x+y;
// }


// try{
// 	const result = add('a', 10);
// }catch(e){
// 	console.log(e.name, ':', e.message);
// }




/* *** throw a user-defined exception */



class NumberError extends Error {
	constructor(value){
		super(` "${value}" is not a valid number`);
		this.name = 'InvalidNumber';
	}
}


function add(x, y){
	if(typeof x!=='number'){
		throw new NumberError(x);
	}
	if (typeof y!=='number'){
		throw new NumberError(y);
	}
	return x+y;
}


try{
	const result = add('a', 10);
}catch(e){
	console.log(e.name, ':', e.message);
}




/* *** optional catch binding 
	https://www.javascripttutorial.net/es-next/optional-catch-binding/
*/



try {

} catch { 	// we can omit the catch binding and its surrounding parentheses

}