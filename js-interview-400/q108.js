// Why is JavaScript treated as Single threaded

/*

JavaScript is generally considered to be a single-threaded programming language because it can only execute one task at a time. This means that, unlike multi-threaded programming languages, JavaScript cannot execute multiple pieces of code simultaneously.

The reason for this is rooted in the design of web browsers, where JavaScript is most commonly used. Web browsers use a single-threaded event loop to manage the execution of JavaScript code. The event loop processes a queue of events, such as user input or network requests, and executes corresponding JavaScript code for each event. While the code for one event is being executed, no other code can be executed. This approach ensures that the execution of JavaScript code does not interfere with the rendering of the web page or other important browser operations.

While JavaScript itself is single-threaded, it is still possible to use techniques such as Web Workers or Async/Await to perform tasks in parallel or asynchronously, albeit not in the same way as traditional multi-threading. Additionally, recent advancements in JavaScript engines and Web APIs have introduced features like SharedArrayBuffer and Atomics, which allow for some limited multi-threading in JavaScript.

https://dev.to/ohdylan/javascript-single-threaded-but-non-blocking-198e

*/
