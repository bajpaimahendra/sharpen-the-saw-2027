/* ***  Call Stack

	https://www.javascripttutorial.net/javascript-call-stack/

	- 'call stack' is used manage execution contexts: the Global Execution Context and Function Execution Contexts.
	- call stack works based on the LIFO principle i.e., last-in-first-out.

		1- When you execute a script, the JavaScript engine creates a Global Execution Context and pushes it on top of the call stack.
		2- Whenever a function is called, the JavaScript engine creates a function execution context for the function, pushes it on top of the call stack.
		3- When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off.
		4- The script will stop when the call stack is empty.


	JavaScript is the single-threaded programming language. means avaScript engine has only one call stack.
	Therefore, it only can do one thing at a time.

	JavaScript engine executes code from top to bottom, line by line. i.e. synchronous

	Asynchronous means the JavaScript engine can execute other tasks while waiting for another task to complete.

	To do this, the JavaScript engine uses an `event loop`




*/
