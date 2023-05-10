// How do you reverse an array without modifying original array?

/**
 * Using slice and reverse methods
 * 
 */

const originalArray = [1, 2, 3, 4, 5];
const newArray = originalArray.slice().reverse(); //Slice an array gives a new copy

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(newArray); // [ 5, 4, 3, 2, 1]

/**
 * Using spread and reverse methods
 */

newArray = [...originalArray].reverse();

/**
 * Using reduce and spread methods
 */

/**
 * Using reduceRight and spread methods
 */

/**
 * Using reduceRight and push methods
 */

