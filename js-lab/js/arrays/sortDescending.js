/*
Sort in descending order

*/

let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

let condition = (a, b) => {
  return b - a;
};

arr.sort(condition);

console.log(arr);
