
	https://www.javascripttutorial.net/
	https://javascript.info/

#### javascript history

	- JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.	
	- Official name of javascript is ECMAScript.
	- ECMAScript versions have been abbreviated to ES1, ES2, ES3, ES5, and ES6.
	- Since 2016 new versions are named by year (ECMAScript 2016 / 2017 / 2018).
	- The Original JavaScript ES1 ES2 ES3 (1997-1999)
	- The First Main Revision ES5 (2009), Added "strict mode" and JSON support
	- The Second Revision ES6 (2015), Added let and const
	- ES6 is also known as ECMAScript 6 or ECMAScript 2015.
	- Yearly Additions (2016, 2017, 2018), Added exponential operator (**), and much more


#### Features	

	- Machine independent
	- Interpreted(run time converted into machine language) 
	- Programming language with object-oriented capabilities
	- Untyped ( dynamically typed ), no need to define int, float , string etc.
	- JavaScript is a client side scripting language
	- case-sensitive i.e variables, function names, and any other identifiers must always consistent
	- ES 6 provide keyword 'class' to create CLASS


	1- For server-side environments (like Node.js) , 
	   execute the script with a command
	   $ node my.js

#### Syntax

	- Semicolon ( ; ) to terminate a simple statement.
	- Curly braces ( {} ) to form a block that groups one or more simple statments.
	- Identifers are names that you choose for variables, functions, classes, etc.
	- Do not use the reserved keywords and reserved words for identifers.

#### Variables

	- Variables are containers to store a value.
	- Unique name of variables are called indentifires.
	- Undefined variable is a variable that has been declared but not initialized.
	- Undeclared variable is variable that has not been declared.
	Q- what is diff b/w undefind and null ? 

	NOTE : dynamically typed language.

	var age = 10; // int
    var name ='bajpai'; // sting

    var salary;  // console.log(salary); // undifined because declared but not assign any value
        salary = 1900000;

    NOTE : Starting in ES6, you can use the let keyword  instead of var to declare a variable 
    
    let age = 10;

    NOTE : Declare two or more variables using a single statement using comma (,) 

    let message = "Hello",
    counter = 100;

    NOTE : dynamically typed language. Although, it is not recommended

    let message = 'Hello'; // sting
		message = 100;     // change to  int

#### Constants

	- A constant holds a value that doesn’t change.
	- Use the const keyword to define a readonly reference to a value.

	  const workday = 5;

#### Data Types

	https://www.javascripttutorial.net/javascript-data-types/

	PRIMITIVE data types:

		1- null
		2- undefined
		3- boolean
		4- number
		5- string
		6- symbol
		7- bigint , available from ES2020

	COMPLEX data type:

		1- object

	SPECIAL data type:

		1- Array, an array is speical data type to store multiple values


	NOTE : check the Data Types a variable 

	var age = 10;
    console.log( typeof(age) );

    var age = '10';
    console.log( typeof(age) );


#### Operators

	1- operators are used to assign values, copmare values and perform airthmetic oprations
	2- combations of operator and operand(variables) called expression

	var sum = a+b;

	var number = 9;

	number += 2; // i.e. number = number + 5;

	var a = 'Hi';
	var b = 'how are you ?'

	var c = a + b; // concatination for string

	Assignment Operators

	= Assign
	+= Add and assign. For example, x+=y is the same as x=x+y.
	-= Subtract and assign. For example, x-=y is the same as x=x-y.
	*= Multiply and assign. For example, x*=y is the same as x=x*y.
	/= Divide and assign. For example, x/=y is the same as x=x/y.
	%= Modulus and assign. For example, x%=y is the same as x=x%y.

	Comparison Operators

	== Is equal to
	=== Is identical (is equal to and is of the same type)
	!= Is not equal to
	!== Is not identical

#### Control flow Statements

	if – statement to execute a block if a condition is true.
	if…else – execute a block of code based on a specified condition
	Ternary operators – show you how to make a shortcut for the if statement ( ?:).
	switch – comparing a value with multiple variants by using the switch statement.
	while – executes a block of code as long as a specified condition is true.
	do…while – executes a block of code repeatedly until a specified condition is false.
	for loop – execute a block of code based on various options.
	break – prematurely terminate a loop.
	continue – skip the current iteration of a loop and jump to the next one.
	Comma operator – comma operator in a for loop to update multiple variables at once.

#### Functions

	- a function is a group of statement to perform a perticular task
	- benifit : reusability
	- All functions implicitly return undefined if they don’t explicitly return a value.

	function functionName(parameters) {
	    // function body
	    // ...
	}

	NOTE - if a function can assign to a variable, then function is called  First Class Citizen 

	var fun1 = function() {
    	console.log("Functions are First Class Citizen in javaScript");
  	}
  
 	fun1();

	




	








1- Hoisting in javascript
1- Scope
1- Closures

1- Synchronous vs Asynchronous
        https://youtu.be/tBmeblr67U0?list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0&t=279

1- addEventListener   
1- execution stack
1- execution context

1- Event Loop
    https://www.youtube.com/watch?v=fuTWE0Mupzk&list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0&index=65

1- Callback Hell




Questions

jquery ajax inside fat arrow function



################################################################# 
#### JavaScript Tutorials for beginners in Hindi 2019 (--- in progress ---)
#### https://www.youtube.com/watch?v=uGRZ2CzkFUo&list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0

### Advanced JavaScript Tutorial in Hindi 2020
### https://www.youtube.com/watch?v=VaBP6_pBOgM&list=PLwGdqUZWnOp0hSGwasCjbrWSPrEKqB_kz

### Modern JavaScript ES6 Tutorial in Hindi in 2020
### https://www.youtube.com/watch?v=JTcjSvFptEM&list=PLwGdqUZWnOp19VX-DM4oHtmWhDfWblFh-

****************************************************************************************

### html tutorial for beginners in hindi
### https://www.youtube.com/watch?v=cIjGKF7HH-E&list=PLwGdqUZWnOp1azM5D2kXbxaCSVLrHrCuw

### HTML and CSS in Hindi 2019
### https://www.youtube.com/watch?v=pN7BFLfSjFw&list=PLwGdqUZWnOp0eabM-y5YHGiy_J4SZm6Ho

### CSS Advanced Tutorial in Hindi 2020
### https://www.youtube.com/watch?v=AFKnthgCpWQ&list=PLwGdqUZWnOp2JYAoNE_-7sSWcIeO1A-xi

### bootstrap 4 tutorial for beginners in hindi
### https://www.youtube.com/watch?v=0UfIGMl3o1M&list=PLwGdqUZWnOp2f1JwXA3k47UteMxaIw6j4

### jQuery Tutorials in Hindi 2018
### https://www.youtube.com/watch?v=NqFtCDw7cWo&list=PLwGdqUZWnOp0X4dVwSsEd6dV49TLLCooI

### AJAX tutorial for beginners in Hindi
### https://www.youtube.com/watch?v=44-D08_d-c8&list=PLwGdqUZWnOp3ZgLj8upMGSRSC1ezBfEZs

### React JS Tutorial in Hindi 2021
### https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ

### Figma Tutorial In Hindi 2022
### https://www.youtube.com/watch?v=JNZ0nkC7Unk&list=PLwGdqUZWnOp0TlgR6uPLR1s6X_w65FlTl
###################################################################


https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt

https://www.greycampus.com/blog/programming/java-script-versions

https://medium.com/engineered-publicis-sapient/javascript-es6-es7-es10-where-are-we-8ac044dfd964

### chrome extension

React Developer Tools