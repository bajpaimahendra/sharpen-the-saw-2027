### Modules
	- A module is a reusable piece of code that encapsulates and exposes a public API( variable , object, function, calss etc ) 
		so it can be easily loaded and used(consume) by other code.

	https://javascript.info/modules-intro
	https://www.javascripttutorial.net/es6/es6-modules/
	https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/

	# Module patterns in ES5
		1- Immediately Invoked Function Expression (IIFE)
				but IIFE don't provide a mechanism for dependency management.
		2- Constructor function
				but again it does not offer a mechanism for dependency management.

	- A module is just a file.
	- One script is one module.
	- A module format is the syntax we can use to define a module.

	- Most widely adapted and well known formats:-

### 1- Asynchronous Module Definition (AMD)	format
		- The AMD format is used in browsers.
		- it's uses a `define` keyword with a dependency array and a function to define modules.
		- initially implemented by the library require.js

### 2- CommonJS  (CJS) format 	***
		- The CommonJS format is used in Node.js(server side).
		- It uses `require` and `module.exports` to define dependencies and modules.
		- `exports` which is object, is used if a module wishes to make available data(variable , object, function, calss etc ) to other modules
		- `require()` function is used , if a module wishes to consume data,  exposed by other modules.

### 3- Universal Module Definition (UMD) format
		- The UMD format can be used both in the browser and in Node.js(server side).
		- The UMD pattern is used when our module needs to be imported by a number of different module loaders (e.g. AMD, CommonJS).
		- The UMD  consists of two parts, An IIFE and An anonymous function that creates our module.
### 4- System.register format
		- The System.register format was designed to support the ES6 module syntax in ES5.

### 5- ES6 module format 	***
		- support by Browsers and server side(Node) through esm node_module.
		- It uses an `export` and `import` keywords to define dependencies and modules.
		- `export` (not exports)  which is object, is used to expose public data TO other modules.
		- `import` which is object, is used to consume public data BY other modules.

		Note: you must use the `import` or `export`` statement outside the functions.


#### Dynamic import of modules throug import()

	- import/export statements don’t work if inside {...}

	if (something) {
	  import {sayHi} from "./say.js"; // Error: import must be at top level
	}

	- Prior to ES2020, it was not possible to dynamically load the module when needed.
	- ES2020 introduced the dynamic import of the module via the function-like `import()`.
	- `import()` returns a Promise that will be fulfilled once the module is loaded completely.
	- Since the import() returns a Promise, we can use the async/await.


