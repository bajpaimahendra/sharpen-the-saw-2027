/*
  https://www.javascripttutorial.net/es6/javascript-rest-parameters/

    - ES6 provides rest parameter that has a prefix of three dots (...)

    function fn(a,b,...argsArr) {
      //...
    }
    
 The rest parameters must be at the end

    function fn(a,...rest, b) {
      // error
    }
 
*/





function sumAll(...parmArr){
  //console.log(parmArr);
  let sum =0;
  for(const ele of parmArr){
      sum +=ele;
  }
  return sum;
}


let sum = sumAll(1, 2, 3, 4, 5, 6, 7);

console.log(sum);





/* ****************************************************** */



// let fun = function(a, b, ...c){

//     console.log(a+' '+b);
//     console.log(c);
//     console.log(c[0]);
//     console.log(c.length);
//     console.log(c.indexOf('Richa'));
// }

// fun('Richa', 'Anjali', 'Mahendra', 'Bajpai');




