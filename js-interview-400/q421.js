// How to invoke an IIFE without any extra brackets?

/**
 * Immediately Invoked Function Expressions(IIFE) requires a pair of parenthesis to wrap the function which contains set of statements.
 */

(function (dt) {
    console.log(dt.toLocaleTimeString());
  })(new Date());


/**
 * Since both IIFE and void operator discard the result of an expression, you can avoid the extra brackets using void operator for IIFE as below,
 */

void function (dt) {
    console.log(dt.toLocaleTimeString());
  }(new Date());