// What is nullish coalescing operator (??)?

/**
 * It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. This can be contrasted with the logical OR (||) operator, which returns the right-hand side operand if the left operand is any falsy value, not only null or undefined.
 */

console.log(null ?? true); // true
console.log(false ?? true); // false
console.log(undefined ?? true); // true