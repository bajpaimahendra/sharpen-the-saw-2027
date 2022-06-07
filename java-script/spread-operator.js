/*
  Spread syntax (...) allows expression of an array, string
                            for function calls
                            for array literals 
 
*/





// function sumAll(a, b, c, d, e){
//   return a+b+c+d+e;
// }

// let numbersArr = [1, 2, 3, 4, 5];

// let sum = sumAll(...numbersArr);     // for function calls

// console.log(sum);





/* ***** Spread in array literals */



// let numArr1 = [0, 1, 2];
// let num = 9;

// let numbers  = [...numArr1, num];       // For array literals:

// console.log(numbers);


    // -- better way to concatenate arrays


// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];

// arr1 = [...arr1, ...arr2];

// console.log(arr1);



/* ***** Spread in object literals */


let obj1 = {foo: 'bar', x: 42};
let obj2 = {foo: 'baz', y: 13};

let clonedObj = {...obj1};

console.log(clonedObj);    // { foo: "bar", x: 42 }


let mergedObj = {...obj1, ...obj2};
console.log(mergedObj);   // { foo: 'baz', x: 42, y: 13 }











