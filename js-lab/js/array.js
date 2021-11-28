const nums = [1, 2, 3, 4, 5, 6, 7];
let newNums = nums.concat([8, 9, 10, 11]);

console.log(newNums);

console.log(newNums.unshift(0)); // add first

console.log(newNums);

console.log(newNums.shift()); // remove first

console.log(newNums);

console.log(newNums.push(13)); // add last

console.log(newNums);

console.log(newNums.pop()); // remove last

console.log(newNums);

console.log(nums.splice(2, 1));

console.log(nums);
