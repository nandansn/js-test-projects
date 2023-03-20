/*

Memoization is a technique used in computer science to optimize the performance of functions that are called frequently with the same arguments. 
The idea behind memoization is to cache the results of a function so that if it is called again with the same arguments, the cached result can be 
returned instead of recomputing the result.

In JavaScript, memoization can be implemented in various ways. One common approach is to create a higher-order function that takes a 
function as an argument and returns a new function that memoizes the original function. For example:

function memoize(fn) {
  var cache = {};
  return function() {
    var args = JSON.stringify(arguments);
    if (cache[args]) {
      return cache[args];
    } else {
      var result = fn.apply(this, arguments);
      cache[args] = result;
      return result;
    }
  };
}


In this code, the memoize function takes a function fn as an argument and returns a new function that memoizes fn. The memoized function checks if the arguments have been cached before calling fn. If the result is already cached, it is returned immediately. 
Otherwise, the original function is called and the result is cached for future use.

Memoization can be used to optimize the performance of functions that are computationally expensive or have side effects, such as network requests or database queries. 
By caching the results of these functions, we can avoid unnecessary computations and reduce the response time of our application.
*/
