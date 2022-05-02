1- JavaScript is a untyped( Dynamically typed ) scripting language

Q- What is variable ??? 
A- variable is a container to store a value, the value can change later.
   constant is also a  container to store a value, the value can not change later.

Q- what is diff between settimeout and setinterval ???

A- both allow to delay the execution i.e. scheduling a call

    setTimeout(expression, timeInMilliSeconds); runs the code/function once after specified time.
    setInterval(expression, timeInMilliSeconds); runs the code/function repeatedly, after specified time.

    setTimeout(console.log('jmd'), 1000); // Will alert once, after a second.

    var intervalID = setInterval(() => alert('Hello'), 9000); // Will alert after every 9 second.
    // clearInterval(intervalID); // Will clear the timer.

    

Q- Difference between var and let in JavaScript ???

A- two new variable containers: let and const are introduce in es6
    now there are three, var, let and const
    Let has lots of similarities with var, but Let has scope constraints(condition) 
    https://www.javatpoint.com/let-vs-var


