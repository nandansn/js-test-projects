let nums = Array.of(1, 2, 3, 4, 5);

console.log(nums);

console.log(Array.from('nanda'));

console.log(
  Array.of(1, 2, 3, 4, 5).reduce((total, value) => {
    total += value;
    return total;
  }, 0)
);

