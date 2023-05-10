// What are closures

/*

A closure is the combination of a function and the lexical environment within which that function was declared. i.e, 
It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains

Own scope where variables defined between its curly brackets
Outer function’s variables
Global variables

function outerFunction() {
  let outerVariable = "Hello";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const myFunction = outerFunction();
myFunction(); // logs "Hello"



*/
