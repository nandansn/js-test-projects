// What is the difference between uneval and eval

/**
 * The uneval function returns the source of a given object; whereas the eval function does the opposite, by evaluating that source code in a different memory area. Let's see an example to clarify the difference,
 */

var msg = uneval(function greeting() {
  return "Hello, Good morning";
});
var greeting = eval(msg);
greeting(); // returns "Hello, Good morning"
