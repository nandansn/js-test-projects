// Give an example where do you really need semicolon

/**
 * It is recommended to use semicolons after every statement in JavaScript. For example, in the below case it throws an error ".. is not a function" at runtime due to missing semicolon.
 */

// define a function
var fn = (function () {
  //...
})(
  // semicolon missing at this line

  // then execute some code inside a closure
  function () {
    //...
  }
)();

// and it will be interpreted as

var fn = (function () {
  //...
})(function () {
  //...
})();
