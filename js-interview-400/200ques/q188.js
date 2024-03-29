// What is a spread operator

/**
 * Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. Let's take an example to see this behavior,
 */

function calculateSum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(calculateSum(...numbers)); // 6


[ref] (https://dev.to/yumatsushima07/javascript-5-interesting-uses-of-javascript-destructuring-1nnb)
