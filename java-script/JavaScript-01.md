
wisdom of crowd
my experiments with truth
the parallel life - Rudrangshu Mukherjee (Author)


1- internal use
<script type="text/javascript">

</script>
1- external use

<script type="text/javascript" src="abc.js";>
</script>


#### Array data type ####



var friends = ['Ram', 'Narayan', 'Arjun'];
document.write(friends[0]);
document.write(friends);

--- OR ----

var var friends = new Array('Ram', 'Narayan', 'Arjun');
document.write(friends[0]);
document.write(friends)

 ##### Part 13: Array Methods #####

 var friends = ['Ram', 'Narayan', 'Arjun'];

var len = friends.length;  // 3

friends.sort;
document.write(friends);

friends.push('Krishna'); // insert at end
document.write(friends);

friends.pop(); // remove from end
document.write(friends);

friends.shift(); // remove from starting 0th element
document.write(friends);

friends.unshift(); // unremove from starting 0th element
document.write(friends);

friends.unshift('Jmd'); // insert at starting 0th element
document.write(friends);

friends.reverse('Jmd'); // reverse elements
document.write(friends);

friends.reverse('Jmd'); // reverse elements
document.write(friends);

var check = Array.isArray(friends);
document.write(check);

var age = [7, 8, 9];
document.write(friends.concat(age));  // Merge two array

document.write(friends.indexOf('Ram'));  // 0

#### part 16: String Object #####
1- a primitive is a fundamental data type that cannot be broken down into a more simple data type

var name1 = 'bajpai'; 
document.write(typeof(name1)); //string

var name2 = new String('bajpai');
document.write(typeof(name2)); //string as object

document.write(name1==name2)); // true

document.write(name1===name2)); // false

-------- properties and method of string --------

var myStr = 'Sita and Ram Radha and Krishna';

document.write( myStr.length) );
document.write( myStr.charAt(9)) );
document.write( myStr.indexOf('Ram')) );
document.write( myStr.lastIndexOf('and')) );
document.write( myStr.replace('and', '&')) );
document.write( myStr.toUpperCase()) );
document.write( myStr.toLowerCase()) );

var myStr2 = 'Hi ';
document.write( myStr2.concat(myStr)) );

#### DOM : Document Object Model ########

1- opening tag e.g <a>
2- closing tag e.g </a>

3- combination of opening tag and closing tag is called element

4- <a href="">click me </a>  href is atribute
5- every element and content inside it is NODE

6- entire web page is Document
7- elements and attributes are Object
8- tree relationship of objects(elements) is called Model

Right click on webPage (Document)-> console-> type window
to see relationship of objects

----- Accessing DOM Elements ---------

https://www.youtube.com/watch?v=SXzFoSSMOgY&list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0&index=19



document.getElementById();
document.getElementsByClassName();

var x = document.getElementById("myDIV");
x.querySelector("p.example").innerHTML = "Hello World!";

var child = document.body.children;
console.log(child);

--- add new  para in body ----
var para = document.createElement("p");
textNode = document.createTextNode("Hello World");
para.appendChild(textNode);
 document.body.appendChild(para);

 #### window.location Object ####

 window.location.href;
 window.location.hostname
 window.location.pathname
 window.location.protocol
 window.location.assign() 

 #### window.print ####

 window.print()

 how print particular div content ?

 #### Events #####

 onclick
 onmouseover
 onmouseout
 onkeydown
 onkeypress
 onkeyup

### Date ####
Jan => 0
Dec => 11
var d = new Date();

d.getMonth();

-- same as --

d.getUTCMonth();

var n = d.getTime(); // Return the number of milliseconds since 1970/01/01:
var hour    = d.getHours(); // method returns the hour (from 0 to 23) 
getMinutes() // method returns the minutes (from 0 to 59)

var time = d.toLocaleTimeString(); // Get the time portion of a date as a string

--- setInterval ---

var myInterval = setInterval(functionName, timeInmiliSeconds); // calls a function at specified intervals (in milliseconds).

clearInterval(myInterval);

--- setTimeout -- 
calls a function  is only executed once 
const myTimeout = setTimeout(myGreeting, 5000); // calls a function after a number of milliseconds.

Tip: The function is only executed once. If you need to repeat execution, use the setInterval() method. 
Tip: Use the clearTimeout() method to prevent the function from running.

#### Eval() ### 
evaluates or executes an argument.

let x = 10;
let y = 20;
let text = "x * y";
let result = eval(text);

Avoid use eval(). Use code or a function instead:

let x = 10;
let y = 20;
let result = x * y;

####  Math Object ####

document.write(Math.pi);
document.write(Math.round(4.5)); // 5
document.write(Math.ceil(4.1)); // 5 , always +1 not matter what is number after decimal
document.write(Math.floor(4.1)); // 4
document.write(Math.pow(8,2)); // 8*2

What is diff b/w round, ceil and floor ??


#### Scope Chain & debugger ####
    https://www.youtube.com/watch?v=_bXeU7EJKlk&list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0&index=33

### JavaScript Objects ###
1- variables can contain single values.
2- But objects can contain many values.
3- The values are written as name : value pairs (name and value separated by a colon).
4- object inside {}
5- array inside []

var empObj = {
    firstName: "Mahendra",
    lastName: "Bajpai"
    age: 43
}
console.log(empObj);
console.log(empObj.firstName);

--- Change the value of property

empObj.age=45;
console.log(empObj);

--- add new property

empObj.middleName = "Kumar"
console.log(empObj);

--- delete property 

delete empObj.middleName;
console.log(empObj);

### FizzBuzz Program ###

https://www.youtube.com/watch?v=AMjjSKnvlwg&list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0&index=41


Q- what is Call Stack & Execution Context ?

#### Function Hoisting ####

https://www.youtube.com/watch?v=9DDS5aXx9y8&list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0&index=50

#### Variable Hoisting ####

https://www.youtube.com/watch?v=R0cU7JsNPcY&list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0&index=51

https://www.youtube.com/watch?v=yQD2tKhoW0k&list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0&index=52

Note: Variables and constants declared with let or const are not hoisted! ???? check it


### Scope Chain & Lexical Scoping ####
https://www.youtube.com/watch?v=Qist9lND9PQ&list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0&index=53


### This keyword : refer current object #### 

What is global object in javascript ? window

console.log(this);

### Types & Object ###

https://www.youtube.com/watch?v=PzHs6cj4WPg&list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0&index=58

primitive (primary) data type , they have value

    Number , String, boolean, undefined, Null, Symbol
Non Primitive data type, the have reference

Object->

#### JavaScript OOP ####

ES 6 provide keyword 'class' to create CLASS

https://www.youtube.com/watch?v=TScmRTAWi5Q&list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0&index=63


### Callback

https://www.youtube.com/watch?v=1WBjdiSum7o

#### Callback Hell

https://www.youtube.com/watch?v=fr67u98nckk&list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0&index=66
















 