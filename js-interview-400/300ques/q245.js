// How do you find min and max value in an array

/**
 * You can use Math.min and Math.max methods on array variables to find the minimum and maximum elements within an array. Let's create two functions to find the min and max value with in an array,
 */
var marks = [50, 20, 70, 60, 45, 30];
function findMin(arr) {
  return Math.min.apply(null, arr);
}
function findMax(arr) {
  return Math.max.apply(null, arr);
}

console.log(findMin(marks));
console.log(findMax(marks));
