// What is promise chaining

/*

The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining. Let's take an example of promise chaining for calculating the final result,

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 3;
  })
  .then(function (result) {
    console.log(result); // 6
    return result * 4;
  });
In the above handlers, the result is passed to the chain of .then() handlers with the below work flow,

The initial promise resolves in 1 second,
After that .then handler is called by logging the result(1) and then return a promise with the value of result * 2.
After that the value passed to the next .then handler by logging the result(2) and return a promise with result * 3.
Finally the value passed to the last .then handler by logging the result(6) and return a promise with result * 4.

*/
