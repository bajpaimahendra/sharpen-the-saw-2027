### Note: 
	JavaScript is synchronous by default and is single threaded. 
	This means that code cannot create new threads( run in parallel ).

####  try-catch-finally in JavaScript (1--done--)
		https://levelup.gitconnected.com/5-things-you-dont-know-about-try-catch-finally-in-javascript-5d661996d77c

#### destructuring in CommonJS (CJS) and ES6 (2--done--)
		1- make a variable from an object or  an array
		2- unpack values from arrays, or properties from objects and  into distinct variables.
		https://www.sitepoint.com/es6-destructuring-assignment/	
		https://www.codewithharry.com/videos/javascript-tutorials-in-hindi-60
		https://www.geeksforgeeks.org/destructuring-assignment-in-javascript/

#### Callbacks

		1- "I will call back later!"

		2- A callback is a function passed as an argument to another function

		3- A callback function can run after another function has finished

		4- wWhen to Use a Callback?
			4.1- Sometimes you would like to have better control over when to execute a function.
			Suppose you want to do a calculation, and then display the result.

			4.2- where one function has to wait for another function (like waiting for a file to load).

		5- The callback function runs after the completion of the outer function.
		6- 	It is useful to develop an asynchronous JavaScript code.

		"Does taking a callback make a function asynchronous?"
		Simply taking a callback doesn't make a function asynchronous.
		Asynchronous function needs to perform an asynchronous operation
			a- timer functions setTimeout, setInterval --------------
			b- special functions nextTick, setImmediate
			c- listening to network, querying a database
			d- reading or writing, generally I/O from a resource
			e- subscribing to an event

#### callback hell

		https://www.w3schools.com/js/js_callback.asp
		https://www.javascripttutorial.net/javascript-callback/

#### error first call back(--done--)
		https://www.geeksforgeeks.org/error-first-callback-in-node-js/
		https://www.youtube.com/watch?v=0pNo1O42m6k
		https://gist.github.com/prof3ssorSt3v3/4d9e606a09f5db643c93d0d61a0467bf

#### spread operator(...) three dots syntax (---done ---)
	1- ES6 provides a new operator called spread operator that consists of three dots
			https://www.geeksforgeeks.org/javascript-spread-operator/
			https://www.javascripttutorial.net/es6/javascript-spread/

#### Rest parameter (...) three dots syntax

#### spread operator(...) vs rest operator
	https://scotch.io/bar-talk/javascripts-three-dots-spread-vs-rest-operators543

#### async await

#### map, reduce, filter

#### call() , bind() , assing(), apply()