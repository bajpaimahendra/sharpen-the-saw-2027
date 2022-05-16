/*

 ( param1, parma2,…paramn )=> {       
 	//code block 
 }
 
*/


///--------- If there are no parameters, you can place an empty parentheses before => ---------------


	// var msg = () => {
	//    console.log("Arrow function 1111")
	// }

	// msg();


//----------- Optional parentheses for a single parameter.-------------


   // var msg = x => {
   //     console.log(x)
   // }

   // msg(10)



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

var sum = (...args) => {
    console.log(args);
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}

var total = sum(1, 2, 3, 4,1);
console.log('sum is ', total);


