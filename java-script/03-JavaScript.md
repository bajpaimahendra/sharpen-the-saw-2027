### How javascript works ?

1- interpreted language, check line by line
1- client (browser) side scripting language
1- every browser has javascript engine, which runs java script
1- javascript enging has a parser, which read code line by line and produce AST (Abstract syntax trees)
1- then engine produce machine code
1- Google Chreme javascript engine is V8, V8 is aslo used by nodejs
1- Mozila has javascript engine called spiderMonkey
1- JavaScript is a single-threaded programming language, which means it has a single Call Stack

### Execution Context

1- JavaScript engine creates the 'Global Execution Context' before it starts to execute any code. 

### Execution Stack

### Lexical Environment

### Creation Phase & Execution Phase 


==============================================================================================

#### Hoisting
1- no matter where functions and variables are declared, they are moved to the top of their scope at creation phase,
before code execution

Note: JavaScript only hoists declarations, not the initializations.

### Function Hoisting

Note:  Hoisting is not working on function expresion and fat arrow function

### Variable Hoisting
Note: Variables and constants declared with let or const are not hoisted! ???? check it

https://www.youtube.com/watch?v=R0cU7JsNPcY&list=PLwGdqUZWnOp0hSGwasCjbrWSPrEKqB_kz&index=6
https://www.youtube.com/watch?v=yQD2tKhoW0k&list=PLwGdqUZWnOp0hSGwasCjbrWSPrEKqB_kz&index=7

### Scope Chain & Lexical(relating) Scoping

 1- a variable defined outside a function can be accessible inside another function defined after the variable declaration

 1- inner functions contain the scope of parent functions even if the parent function

1- Lexical and Dynamic Scoping: Lexical scope is write-time, whereas dynamic scope is run-time. Lexical scope care where a function was declared, but dynamic scope cares where a function was called from

1- While in ES5 'this' referred to the parent of the function, in ES6, arrow functions use lexical scoping — 'this' refers to it's current surrounding scope and no further.

### Strict Mode

1- The "use strict" directive was new in ECMAScript version 5.
1- https://www.w3schools.com/js/js_strict.asp

### This keyword

1- every javascript function while executing has a reference to its current execution context, called 'this'.
2- 'this'  refere to current object

### Pass by Value vs Pass by Reference

https://www.youtube.com/watch?v=HgTAD-6lt1k&list=PLwGdqUZWnOp0hSGwasCjbrWSPrEKqB_kz&index=14

https://youtu.be/32cFG-044HA?list=PLwGdqUZWnOp0hSGwasCjbrWSPrEKqB_kz&t=77


https://www.youtube.com/watch?v=Us2KgfJeFYo&list=PLwGdqUZWnOp0hSGwasCjbrWSPrEKqB_kz&index=17





