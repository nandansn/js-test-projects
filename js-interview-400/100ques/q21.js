// what is Temporal Dead Zone

/*

The temporal dead zone is a term used in the context of the JavaScript programming language and refers to a behavior that occurs 
when using the let and const keywords to declare variables.

In JavaScript, when a variable is declared using let or const, it is only accessible within its declared block or scope.
The temporal dead zone refers to the period between the start of the block and the point at which the variable is declared.
During this time, the variable cannot be accessed or referenced.

function somemethod() {
  console.log(counter1); // undefined
  console.log(counter2); // ReferenceError
  var counter1 = 1;
  let counter2 = 2;
}

The temporal dead zone helps prevent bugs by ensuring that variables are properly declared before they are used.
 It is a concept that is unique to let and const variables, as variables declared with the var keyword are hoisted to the top of their scope and can be accessed anywhere within that scope.

*/
