// What is a comma operator

/**
 * The comma operator is used to evaluate each of its operands from left to right and returns the value of the last operand. This is totally different from comma usage within arrays, objects, and function arguments and parameters. For example, the usage for numeric expressions would be as below,
 */

var x = 1;
x = (x++, x);

console.log(x); // 2