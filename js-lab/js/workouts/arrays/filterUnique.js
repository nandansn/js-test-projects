/*

Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:


*/

function unique(arr) {
  let unique = [];

  arr.forEach((item) => {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  });

  return unique;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings)); // Hare, Krishna, :-O
