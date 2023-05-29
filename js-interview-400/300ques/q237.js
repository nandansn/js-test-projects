// What is call stack

/**
 * Call Stack is a data structure for javascript interpreters to keep track of function calls(creates execution context) in the program. It has two major actions,

Whenever you call a function for its execution, you are pushing it to the stack.
Whenever the execution is completed, the function is popped out of the stack.
Let's take an example and it's state representation in a diagram format


 */

function hungry() {
  eatFruits();
}
function eatFruits() {
  return "I'm eating fruits";
}

// Invoke the `hungry` function
hungry();

/**
 * Add the hungry() function to the call stack list and execute the code.
Add the eatFruits() function to the call stack list and execute the code.
Delete the eatFruits() function from our call stack list.
Delete the hungry() function from the call stack list since there are no items anymore.
 */
