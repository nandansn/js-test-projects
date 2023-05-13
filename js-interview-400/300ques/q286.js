// How do you compare scalar arrays

/**
 * You can use length and every method of arrays to compare two scalar(compared directly using ===) arrays. The combination of these expressions can give the expected result,
 */

let arrayFirst = [1, 2, 3, 4, 5];
let arraySecond = [1, 2, 3, 4, 5];
console.log(
  arrayFirst.length === arraySecond.length &&
    arrayFirst.every((value, index) => value === arraySecond[index])
); // true

// If you would like to compare arrays irrespective of order then you should sort them before,

 arrayFirst = [2, 3, 1, 4, 5];
 arraySecond = [1, 2, 3, 4, 5];
console.log(
  arrayFirst.length === arraySecond.length &&
    arrayFirst.sort().every((value, index) => value === arraySecond[index])
); //true
