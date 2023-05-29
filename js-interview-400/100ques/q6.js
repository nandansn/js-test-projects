/* What is the purpose of the array splice method */

// The splice() method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array.

let {fruits} = require('./data')

console.log(fruits.length);

console.log(fruits.splice(0,2)); // remove 2 elements

console.log(fruits.length);

console.log(fruits.splice(-1,1, 'MANGAI'));

console.log(fruits);