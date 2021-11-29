let nums = [12, 3, 4, 6, 78, 90, 20];

let even = function (num) {
  return num % 2 === 0 ? true : false;
};

let evenNums = nums.filter(even);

console.log(evenNums);
