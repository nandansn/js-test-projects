// Why do we need callbacks
/*

The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript 
will keep executing while listening for other events. Let's take an example with the first function invoking an API call(simulated by setTimeout) 
and the next function which logs the message.

function firstFunction() {
  // Simulate a code delay
  setTimeout(function () {
    console.log("First function called");
  }, 1000);
}
function secondFunction() {
  console.log("Second function called");
}
firstFunction();
secondFunction();

Output;
// Second function called
// First function called
As observed from the output, javascript didn't wait for the response of the first function and the remaining code block got executed.
 So callbacks are used in a way to make sure that certain code doesn’t execute until the other code finishes execution.

 */
