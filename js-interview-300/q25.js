// What is Hoisting

/*

Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. 
Remember that JavaScript only hoists declarations, not initialisation. Let's take a simple example of variable hoisting,

console.log(message); //output : undefined
var message = "The variable Has been hoisted";

The above code looks like as below to the interpreter,

var message;
console.log(message);
message = "The variable Has been hoisted";

In the same fashion, function declarations are hoisted too,

message("Good morning"); //Good morning

function message(name) {
  console.log(name);
}

*/