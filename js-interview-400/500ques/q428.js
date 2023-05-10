// What are the different ways to create sparse arrays?

let nums = []

nums[3] = 1

console.log(nums)

let nums2 = new Array(10)

console.log(nums2);
nums2 = [..."nanda"]
delete nums2[2]
console.log(nums2);

let nums3 = [6,7,8,9]

nums3.length = 10

console.log(nums3);