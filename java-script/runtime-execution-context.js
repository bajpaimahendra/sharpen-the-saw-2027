context (संदर्भ) 

/* *** Execution Contexts

		- When the JavaScript engine executes the JavaScript code, it creates 'global execution contexts'.
		- execution context has two phases:
				creation phase
				execution phase

    The creation phase:- When the JavaScript engine executes a script for the first time, 
    					 it creates the global execution context.
    					 1- Create the global object i.e., window in the web browser or global in Node.js.
    					 2- Create the this object and bind it to the global object.
    					 3- Setup a memory heap for storing variables and function references.
    					 4-  First, store the variables and function declaration in the global execution context.
    					 5- Second, initialize the variables to undefined.

    After the creation phase, the global execution context moves to the execution phase.

    execution phase:- JavaScript engine executes the code line by line.
    				  Assigns the values to variables, and executes the function calls.
    				  For each function call, the JavaScript engine creates a new 'function execution context'.

    - function execution context is similar to the global execution context. But instead of creating the global object,
    - function execution context creates the arguments object that references all parameters passed into the function
    - sets this value to the global object, and initializes the parameter to undefined.


    'global execution context' and  'function execution contexts'  uses the `call stack`



Heap memory:- Data stored randomly and memory allocated.
 Stack memory:- Memory allocated in the form of stacks. Mainly used for functions.
*/