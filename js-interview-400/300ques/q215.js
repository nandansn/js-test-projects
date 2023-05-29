// What is the precedence order between local and global variables

/**
 * A local variable takes precedence over a global variable with the same name. Let's see this behavior in an example.
 */

var msg = "Good morning";
function greeting() {
  msg = "Good Evening";
  console.log(msg); // Good Evening
}
greeting();
