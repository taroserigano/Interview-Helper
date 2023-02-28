Equal: 

"==" only value 
"===" value and type 


String Coercion 

"+": convert number to string 
"-": convert string to number 

 
Higher Order Functions

a function that performs another function inside 
(possibly by parameter) 



This 

is a property of the function or object that declares it 


CURRYING
-a function to take fewer arguments separately 
-set up a function tat takes another parameter inside 

function add (a) {
  return function(b){
    return a + b;
  }
}

multiply(4, 3); // Returns 12
curriedMultiply(4)(3); // Also returns 12



CLOSURES 
-Function that remembers the variables and functions 


function randomFunc(){
  return function(){
    console.log("awesome")
  }
}

var initialiseClosure = randomFunc();


CALLBACKs 

Functions that are used as an argument to another function 


Memoization

Memoization is a form of caching where the return value of a function is cached. If the parameter of that function is not changed, the cached version of the function is returned.


PROMISE 
Promises are used to handle asynchronous operations in javascript.

-Pendeing --initial state 
-Fulfilled -- completed 
-rejected --failed 
-settled --either fulfilled or rejected 

resolve() -- to complete the promise req.

reject() -- to fail the promise req 


then() method is used to access the result when the promise is fulfilled.

catch() method is used to access the result/error 
