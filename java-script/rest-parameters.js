/*
  https://www.javascripttutorial.net/es6/javascript-rest-parameters/

    - ES6 provides rest parameter that has a prefix of three dots (...)

    function fn(a,b,...argsArr) {
      //...
    }

    function fn(a,...rest, b) {
      // error
    }
 
*/


let fun = function(a, b, ...c){

    console.log(a+' '+b);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('Richa'));
}

fun('Richa', 'Anjali', 'Mahendra', 'Bajpai');





