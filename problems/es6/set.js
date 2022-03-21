let nums = new Set();


console.log(nums.add(1));
console.log(nums.add(2));
console.log(nums);

console.log(nums.add(1));
console.log(nums);
console.log(nums.has(1));
console.log(nums.has(3));
console.log(nums.delete(2));
console.log(nums.delete(9));
console.log(nums);
console.log(nums.clear());
console.log(nums);


let person = new Set()
person.add({name:'nanda'})
person.add({name:'nanda'})
console.log(person);