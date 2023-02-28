/* "4": "What is the purpose of the array slice method", */

// The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.



let { fruits } = require('./data');

console.log(fruits.length);

console.log(fruits.slice(1,5));
console.log(fruits.slice(-5, -1));