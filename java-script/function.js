/* **************************
	https://www.javascripttutorial.net/javascript-function/
*/


//----------- Recursion -------------------------------------------

function factorial(num) { 
   if(num<=0) { 
      return 1; 
   } else { 
      return (num * factorial(num-1)  ) 
   } 
} 
console.log('factorial ',factorial(6)) 


//----------- Anonymous Recursive i.e. function calls itself using a pair of parentheses ().  --------


(function() { 
   var msg = "Hello World";
   console.log(msg);
})();