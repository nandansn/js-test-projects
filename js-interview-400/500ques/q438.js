// How to verify if a variable is an array?

/**
 * Array.isArray() method:

The Array.isArray(value) utility function is used to determine whether value is an array or not. This function returns a true boolean value if the variable is an array and a false value if it is not.
 */

const numbers = [1, 2, 3];
const user = { name: 'John' };
Array.isArray(numbers);  // true
Array.isArray(user); //false

/**
 * instanceof operator:

The instanceof operator is used to check the type of an array at run time. It returns true if the type of a variable is an Array other false for other type.
 */

console.log(numbers instanceof Array);  // true
console.log(user instanceof Array);  // false

/**
 * Checking constructor type:

The constructor property of the variable is used to determine whether the variable Array type or not.
 */

console.log(numbers.constructor === Array);  // true
console.log(user.constructor === Array);  // false
