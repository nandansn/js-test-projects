// What is IIFE(Immediately Invoked Function Expression)

/*

is a design pattern in JavaScript that allows a function to be executed immediately after it is defined.

An IIFE is created by defining a function expression and then wrapping it in parentheses, 

(function() {
  // function code goes here
})();


The outer parentheses are used to group the function expression, and the inner parentheses immediately invoke the function. 
The function is executed as soon as the JavaScript interpreter encounters it, without the need to call it explicitly.

IIFEs are often used to create a new scope for variables and functions, allowing them to be used without polluting the global namespace. For example, consider the following code:

var x = 5;

(function() {
  var x = 10;
  console.log(x); // outputs 10
})();

console.log(x); // outputs 5

In this code, an IIFE is used to create a new scope for the variable x. 
The inner x variable is assigned a value of 10, but this does not affect the value of the outer x variable, which remains 5.

IIFEs are commonly used in JavaScript libraries and frameworks to encapsulate code and prevent 
conflicts with other code that may be running on the same page.



 */
