/*

 ( param1, parma2,…paramn )=> {       
 	//code block 
 }

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

-Arrow functions don't have their own bindings to `this`, `arguments` or `super`, and should not be used as methods.
-Arrow functions don't have access to the `new.target` keyword.
-Arrow functions aren't suitable for `call`, `apply` and `bind` methods, which generally rely on establishing a scope.
-Arrow functions cannot be used as constructors.
-Arrow functions cannot use `yield`, within its body.

 
*/


/*--------- If there are no parameters, you can place an empty parentheses before => ---------------*/


	// var msg = () => {
	//    console.log("Arrow function 1111")
	// }

	// msg();


//----------- Optional parentheses for a single parameter.-------------


   // var msg = x => {
   //     console.log(x)
   // }

   // msg(10)


/* 
Remove the body braces , if single statement
Remove "return" -- the return is implied. if single statement in body
Remove the argument parentheses, single parameter
*/



// const add = a=> a+1;

// console.log( add(8) );   




/*
  Destructuring within params
*/


const add = ([a, b]) => a + b;

console.log( add([10,20]) );



///------- If there are no parameters, In fact, you don’t even need the parentheses!  ------


	// var msg =  _ => {
	//    console.log("Arrow function 2222")
	// }

	// msg();




///------------ Optional curly braces {} for a single statement in function body -------------


   // var disp = () => console.log("Hello World")
   // disp();

   // var foo = (x) => 10 + x
   // console.log(foo(10))


///-----------------------------------------------------------------

   // var sum = (x, y) => {
   //     return x + y
   // }
   // let v = sum(1, 2);

   // console.log('addition of 1 and 2 =', v);


//-------------------- rest parameters and arrow function ----------




// var sum = (...args) => {
//     console.log(args);
//     let total = 0;
//     for (const a of args) {
//         total += a;
//     }
//     return total;
// }

// var total = sum(1, 2, 3, 4,1);
// console.log('sum is ', total);





/*
  Arrow function vs. regular function

  https://www.javascripttutorial.net/es6/when-you-should-not-use-arrow-functions/

    1- an arrow function cannot be used as a function constructor.
       If you use the `new` keyword to create a new object from an arrow function, you will get an error.

    1- An arrow function doesn’t have its own `this` and `arguments` object.
    2- you should not use  Arrow function in 
        event handler
        object method
        prototype method
        `arguments` object  
*/




// const counter = {
//   count: 9,
//   next : ()=>{ this.count++},  // this.count in arrow function is equivalent to window.count browser, which is undefined
//   current() { return this.count}        // normal function
// }

// console.log( counter.next() );  // undefined
// console.log( counter.current() );  // 9






 




